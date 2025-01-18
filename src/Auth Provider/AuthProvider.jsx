import PropTypes from "prop-types";
import { AuthContext } from "../Auth Provider/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logOut = () => {
    return signOut(auth);
  };

  const createAccount = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInWithPass = (email, pass, stayLogIn) => {
    setPersistence(
      auth,
      stayLogIn ? browserLocalPersistence : browserSessionPersistence
    );
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const AuthInfo = {
    user,
    loading,
    createAccount,
    signInWithGoogle,
    signInWithPass,
    logOut,
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
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
