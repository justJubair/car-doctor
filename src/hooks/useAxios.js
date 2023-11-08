import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"
import {useNavigate} from "react-router-dom"
export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true
})
const useAxios =()=>{
    const {logOut} = useAuth();
    const navigate = useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        }, error=>{
            console.log("interceptor", error.response.status)
            if(error.response.status === 401 || error.response.status=== 403){
                logOut()
                .then(()=>{
                    navigate("/login")
                })
                .catch(error=>{
                    console.log(error)
                })
            }
            
        })
    },[logOut,navigate])
    return axiosSecure
}

export default useAxios