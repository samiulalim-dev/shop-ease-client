import React, { createContext } from "react";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };

  const userInfo = { googleSignin };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
