/* eslint-disable no-useless-escape */
import { useState } from 'react';
import { updateEmail, updateProfile } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';
import useAuthContext from './useAuthContext';
import useLogout from './useLogout';

const useUpdateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ input: '', message: '' });
  const [success, setSuccess] = useState(false);

  const { dispatch, user: contextUser } = useAuthContext();
  const { logout } = useLogout('/login');

  const attemptUpdateAccount = (email, name) => {
    setSuccess(false);
    setError({ input: '', message: '' });

    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validNameFormat = /^([^0-9]*)$/;

    const validEmail = validEmailFormat.test(email);
    const validName =
      validNameFormat.test(name) && !!name.trim() && name.length <= 30;

    if (!validEmail) {
      setError({
        input: 'email',
        message: 'Please enter a valid email address',
      });
      return;
    }

    if (!validName) {
      if (!name.trim()) {
        setError({
          input: 'name',
          message: 'Please enter a name',
        });
      } else {
        setError({
          input: 'name',
          message: 'Are you sure you entered your name correctly?',
        });
      }
      return;
    }

    updateAccount(email, name);
  };

  const updateAccount = async (email, name) => {
    setLoading(true);

    try {
      const user = auth.currentUser;
      if (contextUser.displayName !== name) {
        await updateProfile(user, { displayName: name });

        const docRef = doc(db, 'maps', user.uid);
        await updateDoc(docRef, { userName: name });
      }
      if (contextUser.email !== email) {
        await updateEmail(user, email);
      }

      dispatch({ type: 'LOGIN', payload: user });

      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.log(error.code);

      switch (error.code) {
        case 'auth/requires-recent-login':
          logout();
          break;
        case 'auth/email-already-in-use':
          setError({
            input: 'email',
            message: 'An account with this email address already exists',
          });
          break;
        case 'auto/too-many-requests':
          setError({
            input: '',
            message:
              'Requests from this device are temporarily blocked due to unusual activity, Try again later',
          });
          break;
        default:
          setError({
            input: '',
            message: 'Looks like something went wrong... Try again later',
          });
          setLoading(false);
      }
    }
  };

  return { loading, error, success, setSuccess, attemptUpdateAccount };
};

export default useUpdateAccount;
