import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
const Services = () => {
    const {isPending, data} = useQuery({
        queryKey: ["servies"],
        queryFn: async()=>{
           const res = await fetch("services.json")
           return res.json()
        }
    })
    if(isPending){
        return <div>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
  

  return (
      <div>
        <div>
            {
                data.map(service=> <ServiceCard key={service._id} service={service}/>)
            }
        </div>
      </div>
      )
};

export default Services;
