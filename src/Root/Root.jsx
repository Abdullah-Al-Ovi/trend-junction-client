import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext()
const Root = () => {
    const [isLight,setIsLight]=useState(true)

    return (
        <div>
            <ThemeContext.Provider value={{isLight,setIsLight}}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ThemeContext.Provider>
        </div>
    );
};

export default Root;