import { createContext } from "react"
import PropTypes from "prop-types"
import auth from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    // create new user
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login new user
    const loginUser = (email,password)=>{
      return signInWithEmailAndPassword(auth, email,password)
    }

    const authInfo = {
        createUser,
        loginUser,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider
