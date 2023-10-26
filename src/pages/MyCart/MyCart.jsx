import { useEffect } from "react"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"

const MyCart = () => {
    const [data, setData] = useState({})
const {user} = useAuth()
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[user?.email])

    console.log(data)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default MyCart
