/* eslint-disable react/no-unescaped-entities */
// import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import ServiceSkeleton from "./ServiceSkeleton";
import { axiosSecure } from "../../hooks/useAxios";
const Services = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [asc, setAsc] = useState(true)
  useEffect(()=>{
    axiosSecure.get(`/services?sort=${asc ? "asc" : "desc"}`)
    .then(res=>{
      setData(res.data)
      setIsLoading(false)
    })
  },[asc])
  // const getServices = async()=>{
  //   // const res = await axiosSecure.get(`/services?sort=${asc ? "asc" : "desc"}`)
  //   // return res
  //   if(asc){
  //     const res = await axiosSecure.get("/services?sort=asc")
  //     return res
  //   } else {
  //     const res = await axiosSecure.get("/services?sort=desc")
  //     return res
  //   }
  // }
  // const { isPending, data, isLoading,refetch } = useQuery({
  //   queryKey: ["servies"],
  //   queryFn: getServices
  //   // queryFn: async () => {
  //   //   const res = await fetch("http://localhost:5000/services");

  //   //   return res.json();
    
  // });
  // if(isLoading){
  //   return <p>loading...</p>
  // }

  const handleShowAll = ()=>{
    setIsShowAll(!isShowAll)
  
  }

  return (
    <div className="mt-16">
      <div className="w-1/2 mx-auto  text-center">
        <h3 className="font-bold text-[#FF3811]">Service</h3>
        <h2 className="font-bold text-3xl mb-4">Our Service Area</h2>
        <p className="text-gray-400 text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      <button onClick={()=>setAsc(!asc)} className="btn text-white my-4 bg-[#FF3811]">
        {asc ? "Price: high to low" : "Price: Low to high"}</button>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {isLoading && <ServiceSkeleton cards={3}/>}
        { 
       
        data?.slice(0, isShowAll ? data.length : 3).map((service) => (
          <ServiceCard key={service._id} service={service}  /> 
        ))
        }
      </div>
      <div className="text-center my-8">
        <button
          onClick={handleShowAll}
          className="btn btn-outline text-[#FF3811]"
        >
          {isShowAll ? "Less services" : "more services"}
        </button>
      </div>
    </div>
  );
};

export default Services;
