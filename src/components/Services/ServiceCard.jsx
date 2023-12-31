import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {



  return (
    <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={ service.img } alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
  <h2 className="card-title">{service.title }</h2>
    
    <div className="flex w-full items-center">
      <p className='font-medium text-start text-[#FF3811]'>Price: ${service.price}</p>
      <Link to={`/checkOutForm/${service._id}`} state={{title: service?.title}} className="btn bg-white text-[#FF3811]"><AiOutlineArrowRight/></Link>
    </div>
  </div>
</div>
  )
}

ServiceCard.propTypes={
  service:PropTypes.object,
}
export default ServiceCard
