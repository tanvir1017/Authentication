import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const Auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  console.log(user);
  const signInUsingGoogle = () => {
    signInWithPopup(Auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const Logout = () => {
    signOut(Auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error.message));
  };
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        console.log("user found by onAuthChanged", user);
        setUser(user);
      }
    });
  }, []);

  return {
    error,
    user,
    Logout,
    signInUsingGoogle,
  };
};

export default useFirebase;
