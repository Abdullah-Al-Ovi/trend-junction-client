import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const BrandProduct = ({data}) => {
    const {_id,name,image,brandname,type,price,rating} = data
    console.log(_id);
    return (
       
        <div className="card flex flex-col card-side bg-base-100 shadow-xl">
             <div className='flex flex-grow flex-col md:flex-row'>
            
            <figure className='w-[90%] md:w-[55%] lg:w-[45%] mx-auto rounded'><img className='lg:h-full lg:object-cover object-contain h-[170px] ' src={image} /></figure>
         
            <div className="card-body flex-grow  pl-2">
           
                <h1 className="lg:text-xl font-medium">{name}</h1>
                <hr />
                <h1><span className="text-base font-medium">Brand: </span>{brandname}</h1>
                <h1><span className="text-base font-medium">Type: </span>{type}</h1>
                <h1><span className="text-base font-medium">Price: </span>${price}</h1>
                <Rating style={{ maxWidth: 150 }}  readOnly size={30} value={rating}  />
            </div>
             </div>
             <div className=' w-[100%] text-center '>
             <Link to={`/update/${_id}`}><button className='w-[60%] text-white  font-medium bg-red-300 rounded mt-3'>Update</button></Link>

             </div>
             
             <div className=' w-[100%] text-center'>
             <Link to={`/product/${_id}`} ><button className='w-[60%] text-white  font-medium bg-red-300 rounded my-3 '>Details</button></Link>
             </div>
             
</div>
    );
};

export default BrandProduct;