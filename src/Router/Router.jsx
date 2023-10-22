import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/brandProducts/brandProducts";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct/updateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";



const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,

        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products/:brandname',
                element:<BrandProducts></BrandProducts>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.brandname}`)
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/update/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/id/${params.id}`)
            },
            {
                path:'/product/:id',
                loader:({params})=>fetch(`http://localhost:5000/products/id/${params.id}`),
                element:<ProductDetails></ProductDetails>

            }

        ]    
    }
])

export default Router;