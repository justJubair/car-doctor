import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true
})
const useAxios =()=>{
    const {logOut} = useAuth()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        }, error=>{
            console.log("interceptor", error.response.status)
            if(error.response.status === 401 || error.response.status=== 403){
                return logOut()
            }
            
        })
    },[logOut])
    return axiosSecure
}

export default useAxios