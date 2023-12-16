"use client";
import React, { useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "@/utils/firebase/firebase-config";
import Loader from "@/components/Loader";

const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const logout = () => {
    setUser(null);
  };
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {loading ? <Loader color="blue" /> : children}
    </AuthContext.Provider>
  );
};
