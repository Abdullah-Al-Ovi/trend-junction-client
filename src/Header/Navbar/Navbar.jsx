import { NavLink } from "react-router-dom";
import logo from '../../assets/download.jfif'
import { useState } from "react";


const Navbar = () => {

  const [isLight,setIsLight]=useState(true)
  const changeTheme=()=>{
    setIsLight(!isLight)
   
      document.body.classList.toggle("dark-mode")
    
  }

    return (
        <div className="navbar bg-base-100 shadow-lg ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/addproduct'>Add product</NavLink></li>
       <li><NavLink to='/mycart'>My cart <i className="fa-solid fa-cart-shopping text-purple-600"></i></NavLink></li>
       
      </ul>
    </div>
    <img className="w-[50px] h-[50px] rounded-full" src={logo} />
    <a className="btn btn-ghost normal-case text-xl">Trend Junction</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/addproduct'>Add product</NavLink></li>
       <li><NavLink to='/mycart'>My cart  <i className="fa-solid fa-cart-shopping text-purple-600"></i></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn">Sign In</a>
  
  <button onClick={changeTheme} title={`${isLight?'Dark':'Light'}`} className={`p-[3px] rounded ${isLight? 'bg-blue-200 ': 'bg-black'}`}>
        {
          isLight ? <i className="fa-regular fa-sun text-black"></i> : <i className="fa-solid fa-moon text-white"></i>
        }
    </button>

  </div>
</div>
    );
};

export default Navbar;