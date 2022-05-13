import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import useAuthContext from './useAuthContext';

const useLogout = url => {
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);

    await auth.signOut();
    dispatch({ type: 'LOGOUT' });
    setLoading(false);
    navigate(url);
  };

  return { loading, logout };
};

export default useLogout;
