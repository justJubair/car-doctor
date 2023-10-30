import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ServiceSkeleton = ({cards}) => {
    return(
        Array(cards).fill(0).map((_, index)=> <div key={index} className="card bg-base-100 shadow-xl">
        <div className='px-8 py-10 rounded-xl' >{<Skeleton className='h-44 w-full'/>}</div>
        <h3 className='w-1/2 pl-8'>{<Skeleton/>}</h3>
        <div className='flex justify-between items-center'>
        <p className='w-1/2 pl-8 py-9'>{<Skeleton/>}</p>
        <p className='w-20 pr-8'>{<Skeleton className='h-10' />}</p>
        </div>
  </div>)
        
    )}
export default ServiceSkeleton;