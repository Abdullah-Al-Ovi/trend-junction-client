import { useContext } from "react";
import { authContex } from "../../Components/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import CartProduct from "../../Components/CartProduct/CartProduct";

const MyCart = () => {

    const {user}= useContext(authContex)
    // const [loadedCart,setLoadedCart]=useState([])
    const [cartProducts,setCartProducts]=useState([])

    useEffect(()=>{
        fetch(`https://brand-reseller-server.vercel.app/cart/${user.email}`)
        .then(res=>res.json())
        .then(data=>setCartProducts(data))
    },[user.email])
    console.log(cartProducts);
    
    
    return (
        <div>
            <div className="text-lg lg:text-2xl text-center font-medium my-5">
            <i className="fa-solid fa-cart-shopping text-purple-600"></i><span>My cart</span>  
            </div>
            <div className="w-[90%] lg:w-[50%] gap-3 mx-auto ">
                {
                  cartProducts?.map(product=><CartProduct key={product._id} product={product} 
                    cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  ></CartProduct>)  
                }
            </div>
            {
                cartProducts.length === 0 && <div className=" h-[50vh] flex justify-center items-center text-center  mx-auto "><h1 className="mx-auto text-xl text-red-500 font-semibold ">You have not added any product to cart yet.</h1></div>
            }
        </div>
    );
};

export default MyCart;
