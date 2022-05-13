import { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import useAuthContext from './useAuthContext';
import useLogout from './useLogout';

const useDeleteAccount = () => {
  const [loading, setLoading] = useState(false);

  const { dispatch, user } = useAuthContext();
  const { logout } = useLogout();

  const deleteAccount = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'maps', user.uid);

      await deleteDoc(docRef);
      await deleteUser(auth.currentUser);

      dispatch({ type: 'LOGOUT' });

      setLoading(false);
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        logout('/login');
      }
      console.log(error);
      setLoading(false);
    }
  };

  return { loading, deleteAccount };
};

export default useDeleteAccount;
