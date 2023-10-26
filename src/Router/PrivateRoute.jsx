import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import PropTypes from "prop-types"

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        return <div className="h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login"></Navigate>
 
}

PrivateRoute.propTypes={
    children:PropTypes.node
}
export default PrivateRoute
