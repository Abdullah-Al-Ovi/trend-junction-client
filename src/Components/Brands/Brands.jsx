import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";


const Brands = () => {
    const [brands,setBrands]=useState([])

    useEffect(()=>{
        fetch('/brands.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div className="w-[90%] mx-auto">
           <h1 className="text-center text-3xl font-semibold my-7">Our Brands</h1> 
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {
                brands?.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
            }
           </div>
        </div>
    );
};

export default Brands;