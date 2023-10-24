

import { useContext } from "react";
import Brands from "../../Components/Brands/Brands";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import Faq from "../../Components/FAQ/Faq";
import Banner from "../../Header/Banner/Banner";
import { ThemeContext } from "../../Root/Root";


const Home = () => {
    const {isLight} = useContext(ThemeContext)
    return (
        <div className={`${!isLight && 'darkcss'}`}>
            <Banner></Banner>
            <Brands></Brands>
            <Faq></Faq>
            <DownloadApp></DownloadApp>

            
        </div>
    );
};

export default Home;