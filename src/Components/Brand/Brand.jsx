import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    const {brandname,image}=brand
    return (
  
        <Link to={`/products/${brandname}`}>
        
        <div className="border-[2px] p-3 flex flex-col bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                <div className="flex-grow "><img className="rounded-full border-[2px] h-24  w-24 md:h-32 md:w-32 lg:h-64 lg:w-64 mx-auto" src={image} /></div>
                <div ><h1 className="text-2xl font-semibold text-center">{brandname}</h1></div>

            </div>
   

        </Link>
    

       
    );
};

export default Brand;