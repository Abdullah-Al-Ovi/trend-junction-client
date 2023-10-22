import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'


const ProductDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
//         <div classNameName="lg:h-[80vh] my-11 flex justify-center items-center">
//            <div classNameName="flex flex-col items-center justify-center w-[80%] lg:w-full max-w-sm mx-auto">
//   <div
//     classNameName="w-full h-64 bg-gray-300 bg-cover bg-no-repeat rounded-lg shadow-md"
//     style={{
//       backgroundImage:
//         `url(${loadedData.image})`,
//     }}
//   ></div>

//   <div classNameName="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
//     <h3 classNameName="py-2 font-medium md:font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
//      {loadedData.name}
//     </h3>
    

//     <div>
//         <div>
//         <div classNameName="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
//       <span classNameName="font-medium md:font-bold text-gray-800 dark:text-gray-200">${loadedData.price}</span>
//       <button classNameName="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
//         Add to cart
//       </button>
//     </div> 
//         </div>
//         <div classNameName="p-1 my-2">
//             <p classNameName="text-sm"><span classNameName="font-medium">Type: </span>{loadedData.type}</p>
//             <p classNameName="text-sm flex items-center"><span classNameName="font-medium">Rating: </span>
//             <Rating style={{ maxWidth: 150 }}  readOnly size={30} value={loadedData.rating}  />
//             </p>
//             <p classNameName="text-sm"><span classNameName="font-medium">Description: </span>{loadedData.short_description}</p>
//         </div>
//     </div>
//   </div>
// </div>
 
//         </div>
<div className=" overflow-hidden w-[80%] mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
<div className="px-4 py-2 text-center">
    <h1 className="text-lg lg:text-2xl font-semibold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
    
</div>

<img className="object-cover w-[60%] mx-auto mt-2 rounded" src={loadedData.image} alt="NIKE AIR" />

<div className="flex items-center w-[60%] mx-auto justify-between px-4 py-2 bg-gray-900">
    <h1 className="text-lg font-bold text-white">$129</h1>
    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
</div>
<div className="text-center space-y-2 my-3">
<p className="mt-1 text-gray-600dark:text-gray-400"><span className="text-lg font-medium">Description: </span>{loadedData.short_description}</p>
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