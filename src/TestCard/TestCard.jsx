

const TestCard = () => {
    return (
        <div className="w-[80%] mx-auto  flex justify-center items-center border-2">
            
<div className=" w-full bg-white rounded-lg shadow dark:bg-gray-800">
    <div className="flex-none w-[60%] mx-auto">
        <img src='https://i.ibb.co/2cgvswY/nike-sportswear-elemental-backpack.jpg' alt="shopping image" className="border-2  rounded-lg"/>
    </div>
    <div className="flex-auto p-6">
        <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                classNameic Utility Jacket
            </h1>
            <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                $110.00
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                In stock
            </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
            <form className="flex space-x-2">
                <label className="text-center">
                    <input type="radio" className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600" name="size" value="xs"/>
                        XS
                    </label>
                    <label  className="text-center">
                        <input type="radio" className="flex items-center justify-center w-6 h-6" name="size" value="s"/>
                            S
                        </label>
                        <label className="text-center">
                            <input type="radio" className="flex items-center justify-center w-6 h-6" name="size" value="m"/>
                                M
                            </label>
                            <label className="text-center">
                                <input type="radio" className="flex items-center justify-center w-6 h-6" name="size" value="l"/>
                                    L
                                </label>
                                <label className="text-center">
                                    <input type="radio" className="flex items-center justify-center w-6 h-6" name="size" value="xl"/>
                                        XL
                                    </label>
                                </form>
                                <p className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">
                                    Size Guide
                                </p>
                            </div>
                            <div className="flex mb-4 text-sm font-medium">
                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Add to cart
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                Free shipping on all continental US orders.
                            </p>
                        </div>
                    </div>

        </div>
    );
};

export default TestCard;