

import Brands from "../../Components/Brands/Brands";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import Faq from "../../Components/FAQ/Faq";
import Banner from "../../Header/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Faq></Faq>
            <DownloadApp></DownloadApp>

            
        </div>
    );
};

export default Home;