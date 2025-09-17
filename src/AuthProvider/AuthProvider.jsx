import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google sign in
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // credential sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update user profile
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    googleSignin,
    user,
    loading,
    createUser,
    setUser,
    signInUser,
    updateUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
