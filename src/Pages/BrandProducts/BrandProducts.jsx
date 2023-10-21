
import { useLoaderData } from "react-router-dom";
import BrandProduct from "../../Components/BrandProduct/BrandProduct";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import avd1 from '../../assets/adv1.jpg'
import avd2 from '../../assets/adv2.jpg'
import avd3 from '../../assets/avd3.jpg'




const BrandProducts = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
  
    return (
        <div>
            {
                 <div className="flex flex-col h-full " >
                <AwesomeSlider className="h-full">
                      <div className="h-full"><img className=" object-cover h-full" src={avd1}/></div>
                      <div className="w-[100%] object-cover"><img className="h-full w-[100%] object-cover" src={avd2}/></div>
                      <div className="h-full"><img className="h-full object-cover" src={avd3}/></div>
                      
                </AwesomeSlider> 
                </div>
            }
            
            <div className="grid grid-cols-2 gap-3  w-[90%] lg:w-[85%] mx-auto my-11">
             {
              loadedData.length > 0 &&   loadedData?.map(data=><BrandProduct key={data._id} data={data}></BrandProduct>) 
             }
            </div>
            {
                loadedData.length === 0 &&  <div className=" h-[50vh] flex justify-center items-center text-center  mx-auto "><h1 className="mx-auto text-xl text-red-500 font-semibold ">There is no product available for this brand right now.Stay Connected to know whenever available.</h1></div>
            }


        </div>
    );
};

export default BrandProducts;