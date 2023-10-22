import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
        <div>
            {loadedData.name}
        </div>
    );
};

export default ProductDetails;