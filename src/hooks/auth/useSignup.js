/* eslint-disable no-useless-escape */
import { useState, useReducer } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { addInitMapToDB } from '../../firebase/utils';
import useAuthContext from './useAuthContext';

const initialErrState = { form: '', email: '', password: '', name: '' };

const errReducer = (state, { type, error }) => {
  switch (type) {
    case 'FORM':
      return { ...state, form: error };
    case 'EMAIL':
      return { ...state, email: error };
    case 'PASSWORD':
      return { ...state, password: error };
    case 'NAME':
      return { ...state, name: error };
    case 'RESET':
      return initialErrState;
    default:
      return state;
  }
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const [errState, dispatchErr] = useReducer(errReducer, initialErrState);
  const { dispatch: dispatchContext } = useAuthContext();

  const attemptSignup = (email, password, name) => {
    dispatchErr({ type: 'RESET' });

    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validNameFormat = /^([^0-9]*)$/;

    const validEmail = validEmailFormat.test(email);
    const validName =
      validNameFormat.test(name) && !!name.trim() && name.length <= 30;
    const validPassword = password.length >= 6 && password.length <= 25;

    if (!validEmail) {
      dispatchErr({
        type: 'EMAIL',
        error: 'Please enter a valid email address',
      });
    }

    if (!validPassword) {
      if (!password.trim()) {
        dispatchErr({
          type: 'PASSWORD',
          error: 'Please enter a password',
        });
      } else {
        dispatchErr({
          type: 'PASSWORD',
          error: 'Your password must contain between 6 and 25 characters',
        });
      }
    }

    if (!validName) {
      if (!name.trim()) {
        dispatchErr({
          type: 'NAME',
          error: 'Please enter a name',
        });
      } else {
        dispatchErr({
          type: 'NAME',
          error: 'Are you sure you entered your name correctly?',
        });
      }
    }

    if (validName && validEmail && validPassword) {
      signup(email, password, name);
    }
  };

  const signup = async (email, password, name) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(auth.currentUser, { displayName: name });
      await addInitMapToDB(user);
      dispatchContext({ type: 'LOGIN', payload: user });

      setLoading(false);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          dispatchErr({
            type: 'EMAIL',
            error: 'An account with this email address already exists',
          });
          break;
        case 'auto/too-many-requests':
          dispatchErr({
            type: 'FORM',
            error:
              'Requests from this device are temporarily blocked due to unusual activity, Try again later',
          });
          break;
        default:
          dispatchErr({
            type: 'FORM',
            error: 'Looks like something went wrong... Try again later',
          });
      }
      setLoading(false);
    }
  };

  return { loading, errState, attemptSignup };
};

export default useSignup;
