import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';


const UpdateProduct = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);
    const [finalName,setFinalName]=useState(loadedData.name)
    const [finalBrandname,setFinalBrandname]=useState(loadedData.brandname)
    const [finalType,setFinalType]=useState(loadedData.type)
    const [finalimage,setFinalImage]=useState(loadedData.image)
    const [finalPrice,setFinalPrice]=useState(loadedData.price)
    const [finalRating,setFinalrating]=useState(loadedData.rating)

    const handleUpdate =(e)=>{
        e.preventDefault()
        const updatedProduct = {name:finalName,brandname:finalBrandname,type:finalType,image:finalimage,price:finalPrice,rating:finalRating}
        console.log(updatedProduct);
        fetch(`https://brand-reseller-server.vercel.app/products/id/${loadedData._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            swal("Congratulations!", "Product data updated successfully", "success");
        })
    }

    return (
        <div>
        <div className="text-center mt-3">
            <h1 className="text-lg font-medium md:text-2xl md:font-semibold ">Update product</h1>
        </div>
        <div className="w-[95%] md:w-[80%] mx-auto my-7">

        <form onSubmit={handleUpdate} className="bg-slate-200 p-5 rounded">
           <div className="w-[85%] mx-auto space-y-2">
           <div className="flex  ">
                <div className="w-[100%]">
                <h1 className="">Name:</h1>
                <input value={finalName} onChange={(e)=>setFinalName(e.target.value)} type="text" name="name" className="rounded p-1 w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Brandname:</h1>
                <input value={finalBrandname} onChange={(e)=>setFinalBrandname(e.target.value)} type="text" name="brandname" className="rounded p-1 w-[65%]" />
                </div>
            </div>
           <div className="flex">
                <div className="w-[100%]">
                <h1 className="">Type:</h1>
                <input value={finalType} onChange={(e)=>setFinalType(e.target.value)} type="text" name="type" className="rounded p-1 w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Image:</h1>
                <input value={finalimage} onChange={(e)=>setFinalImage(e.target.value)} type="text" name="image" className=" rounded p-1 w-[65%]" />
                </div>
            </div>
           <div className="flex ">
                <div className="w-[100%]">
                <h1 className="">Price:</h1>
                <input value={finalPrice} onChange={(e)=>setFinalPrice(e.target.value)} type="text" name="price" className="rounded p-1 w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Rating:</h1>
                <input value={finalRating} onChange={(e)=>setFinalrating(e.target.value)} type="text" name="rating" className="rounded p-1 w-[65%] " />
                </div>
            </div>
           
           </div>
           
           <div className="text-center ">
                <input type="submit" className="border-[2px] bg-green-400 px-2 w-[50%] my-3 mx-auto " value="Submit" />
           </div>

        </form>
        </div>
    </div>
    );
};

export default UpdateProduct;