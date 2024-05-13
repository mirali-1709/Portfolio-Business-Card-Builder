import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../src/fierbase-config';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("Auth state changed. User:", user);
      setUser(user);
      setLoading(false);
    });
    console.log("Unsubscribed from auth state changes.");
    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};
