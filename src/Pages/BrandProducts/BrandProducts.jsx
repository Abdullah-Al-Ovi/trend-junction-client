import { useLoaderData } from "react-router-dom";
import BrandProduct from "../../Components/BrandProduct/BrandProduct";


const BrandProducts = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
  
    return (
        <div>
            {
              loadedData.length  ?   loadedData?.map(data=><BrandProduct key={data._id} data={data}></BrandProduct>) 
              : 
              <div><h1>There is no product available fro this brand.Stay Connected to know whenever available</h1></div>
            }
        </div>
    );
};

export default BrandProducts;