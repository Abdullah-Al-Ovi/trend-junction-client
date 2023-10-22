import swal from 'sweetalert';

const AddProduct = () => {

    const handleAddProduct=e=>{
        e.preventDefault()
        const name = e.target.name.value
        const brandname = e.target.brandname.value
        const type = e.target.type.value
        const image = e.target.image.value
        const price = parseFloat(e.target.price.value)
        const rating = parseFloat(e.target.rating.value)
        const short_description = e.target.description.value
        const product ={name,brandname,type,image,price,rating,short_description}
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            swal("Congratulations!", "Product added successfully!", "success");
            e.target.reset()
        })
    
    }

    return (
        <div>
            <div className="text-center mt-3">
                <h1 className="text-lg font-medium md:text-2xl md:font-semibold ">Add product</h1>
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto my-7">
            <form onSubmit={handleAddProduct} className=" bg-slate-200 p-5 rounded">
               <div className="w-[85%] mx-auto space-y-2">
               <div className="flex  ">
                    <div className="w-[100%]">
                    <h1 className="">Name:</h1>
                    <input required type="text" name="name" className="rounded p-1 w-[65%]" />
                    </div>

                    <div className="w-[100%] ">
                    <h1>Brandname:</h1>
                    <input required type="text" name="brandname" className="rounded p-1 w-[65%]" />
                    </div>
                </div>
               <div className="flex">
                    <div className="w-[100%]">
                    <h1 className="">Type:</h1>
                    <input required type="text" name="type" className="rounded p-1 w-[65%]" />
                    </div>

                    <div className="w-[100%] ">
                    <h1>Image:</h1>
                    <input required type="text" name="image" className=" rounded p-1 w-[65%]" />
                    </div>
                </div>
               <div className="flex ">
                    <div className="w-[100%]">
                    <h1 className="">Price:</h1>
                    <input required type="text" name="price" className="rounded p-1 w-[65%]" />
                    </div>

                    <div className="w-[100%] ">
                    <h1>Rating:</h1>
                    <input required type="text" name="rating" className="rounded p-1 w-[65%] " />
                    </div>
                </div>
               
               </div>
               <div className="text-center mt-3 w-[85%] mx-auto ">
                <h1>Description</h1>
                    <textarea required name="description" id="" cols="40" rows="5"></textarea>
               </div>
               <div className="text-center ">
                    <input type="submit" className="border-[2px] bg-green-400 px-2 w-[50%] my-3 mx-auto " value="Add" />
               </div>

            </form>
            </div>
        </div>
    );
};

export default AddProduct;