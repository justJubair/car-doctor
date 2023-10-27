import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { Outlet, useLocation } from "react-router-dom"

const Root = () => {
  // dynamic pathname
  const location = useLocation()
  
  useEffect(()=>{
    if(location.pathname === "/"){
      document.title = "Car Doctor"
    } else {
      document.title = `Car Doctor ${location.pathname.replace("/", "-")}`
    }
    if(location.state?.title){
      document.title = location.state?.title
    }
  },[location.pathname, location.state])
  return (
    <div className="max-w-6xl mx-auto">
      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default Root
