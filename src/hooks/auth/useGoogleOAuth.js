import { useState } from 'react';
import { signInWithRedirect } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/config';

const useGoogleOAuth = () => {
  const [loading, setLoading] = useState(false);

  const googleLogin = async () => {
    setLoading(true);

    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, googleLogin };
};

export default useGoogleOAuth;
