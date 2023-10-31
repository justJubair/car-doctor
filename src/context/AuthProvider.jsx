import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // set loading state
  const [loading, setLoading] = useState(true)
  // create new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login new user
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout a user
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  // setup a observer for user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email: userEmail}
     
      setUser(currentUser);
      setLoading(false)
      // send user email to create a jwt token
    
    //  if user exists,
      if(currentUser){

        axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials:true})
        .then(res=>{
          console.log(res.data)
        })
      }
      else {
        axios.post("http://localhost:5000/logout", loggedUser,  {withCredentials:true})
        .then(res=>{
          console.log(res.data)
         
        })
      }
      return () => {
        unsubscribe();
      };
    });
  }, [user?.email]);
  const authInfo = {
    user,
    createUser,
    loginUser,
    loading,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
