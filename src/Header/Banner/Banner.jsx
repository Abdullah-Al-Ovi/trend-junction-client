import './Banner.css'
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <header className="bg-gray-900 pattern">
    <div className="container px-6 mx-auto">
        <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
            

           
        </nav>

        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">Discover Iconic Brands</h2>

                <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                at <span className="text-blue-400">Your Fingertips</span>
                </h3>

                <p className="mt-4 text-gray-100">Welcome to Trend Junction, your ultimate destination for premium fashion and style. Explore a curated collection of the world&rsquo;s leading brands, including Adidas, Nike, Levi&rsquo;s, H&M, Gucci, and Puma.
                <br />
                 Elevate your style and make a statement with our diverse range of high-quality products</p>

            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                    <div className="px-6 py-8 text-center">
                      
                        <img src={banner} alt="" />
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
    );
};

export default Banner;