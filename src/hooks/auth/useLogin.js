import { useState, useReducer } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import useAuthContext from './useAuthContext';

const initialErrState = { form: '', email: '', password: '' };

const errReducer = (state, { type, error }) => {
  switch (type) {
    case 'FORM':
      return { ...state, form: error };
    case 'EMAIL':
      return { ...state, email: error };
    case 'PASSWORD':
      return { ...state, password: error };
    case 'RESET':
      return initialErrState;
    default:
      return state;
  }
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const [errState, dispatchErr] = useReducer(errReducer, initialErrState);
  const { dispatch: dispatchContext } = useAuthContext();

  const attemptLogin = (email, password) => {
    dispatchErr({ type: 'RESET' });

    // eslint-disable-next-line
    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validEmail = validEmailFormat.test(email);

    if (!validEmail) {
      dispatchErr({
        type: 'EMAIL',
        error: 'Please enter a valid email address',
      });
    }
    if (!password) {
      dispatchErr({
        type: 'PASSWORD',
        error: 'Please enter a password',
      });
    }

    if (validEmail && password) {
      login(email, password);
    }
  };

  const login = async (email, password) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatchContext({
        type: 'LOGIN',
        payload: userCredential.user,
      });

      setLoading(false);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          dispatchErr({
            type: 'PASSWORD',
            error: 'Incorrect password, try again',
          });
          break;
        case 'auth/user-not-found':
          dispatchErr({
            type: 'EMAIL',
            error: "We couldn't find an account with that email address",
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

  return { loading, errState, attemptLogin };
};

export default useLogin;
