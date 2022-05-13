import { createContext, useReducer, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { addInitMapToDB } from '../firebase/utils';

import { auth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return {
        user: action.payload,
        authIsReady: true,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    getRedirectResult(auth).then(async result => {
      if (!result) return;
      await addInitMapToDB(result.user);
    });
    const unsub = auth.onAuthStateChanged(user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
    });
    return unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
