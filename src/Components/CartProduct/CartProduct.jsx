import swal from "sweetalert";


const CartProduct = ({product,setCartProducts,cartProducts}) => {
    const {image,name,price,brandname}= product
    const handleRemoveFromCart=()=>{
            
            fetch(`https://brand-reseller-server.vercel.app/cart/id/${product._id}`,{
                method:'DELETE',
               
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const rem = cartProducts.filter((cartProduct) => cartProduct._id !== product._id)
                setCartProducts(rem)
                console.log();
                swal("Hmm...!", "Product removed from cart!", "success");
            
            })
    }

    return (
        <div className="flex  justify-between  my-3 shadow-md">
            <div className="w-[20%]   lg:my-auto">
                <img src={image} className="lg:h-[80%]" />
            </div>
           
           <div>
                <p className="font-medium text-xs md:text-base">{name}</p>
                <p className="text-xs md:text-base"><span className="font-medium">Brand:</span> {brandname}</p>
            </div>
            <div className="flex flex-col">
                <p className="flex-grow text-xs md:text-base"><span className="font-medium">Price:</span> ${price}</p>
                <div className="">
                <button onClick={handleRemoveFromCart} className="bg-red-500 p-1 rounded text-white text-[11px]">Remove from cart <i className="fa-regular fa-trash-can"></i></button>
            </div>
            </div>
            
         
           
        </div>
    );
};

export default CartProduct;