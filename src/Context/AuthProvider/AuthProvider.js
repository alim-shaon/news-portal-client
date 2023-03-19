import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleSignIn = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoader(true);
    // console.log("step -2");
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setNameAndPhoto = (name, url) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const logOut = () => {
    setLoader(true);
    // console.log("logged out called");
    return signOut(auth);
  };

  // ===================================
  // observer
  // ===================================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const user = currentUser;
      // console.log("called", user);
      if (user === null || user?.emailVerified) {
        setUser(user);
        // console.log("inside on auth stateChaged", user);
      }
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    setLoader,
    googleSignIn,
    createUser,
    userSignIn,
    setNameAndPhoto,
    verifyEmail,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
