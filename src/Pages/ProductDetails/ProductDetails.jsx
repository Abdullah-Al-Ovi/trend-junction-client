import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { authContex } from "../../Components/AuthProvider/AuthProvider";
import swal from "sweetalert";


const ProductDetails = () => {
    const {user} = useContext(authContex)
    const loadedData = useLoaderData()
  
    const {_id,...cartInfo}= loadedData
    cartInfo.user_email = user.email

    const handleAddToCart=(id)=>{
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            swal("Congratulations!", "Product added to cart", "success");

        })
    }
    return (

<div className=" overflow-hidden w-[80%] mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
<div className="px-4 py-2 text-center">
    <h1 className="text-lg lg:text-2xl font-semibold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
    
</div>

<img className="object-cover w-[60%] mx-auto mt-2 rounded" src={loadedData.image} alt="NIKE AIR" />

<div className="flex items-center w-[60%] mx-auto justify-between px-4 py-2 bg-gray-900">
    <h1 className="text-lg font-bold text-white">$129</h1>
    <button onClick={()=>handleAddToCart(loadedData._id)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
</div>
<div className="text-center space-y-2 my-3">
<p className="mt-1 text-gray-600 dark:text-gray-400"><span className="text-lg font-medium">Description: </span>{loadedData.short_description}</p>
<p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Brand: </span>{loadedData.brandname}</p>
<p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Type: </span>{loadedData.type}</p>
<p className="text-sm flex  justify-center items-center "><span className="font-medium">Rating: </span>
           <Rating style={{ maxWidth: 150 }}  readOnly size={30} value={loadedData.rating}  />
             </p>

</div>
</div>

    );
};

export default ProductDetails;