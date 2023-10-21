import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const navLinks = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/services">Services</NavLink></li>
  <li><NavLink to="/blog">Blog</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              navLinks
            }         
        </ul>
      </div>
     <img className="w-20" src={logo} alt="" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-4">
       {
        navLinks
       }
      </ul>
    </div>
    <div className="space-x-6 navbar-end">
      <AiOutlineShopping className="text-gray-500" size={25}/>
      <AiOutlineSearch className="text-gray-500" size={25}/>
      <a className="btn btn-outline text-[#FF3811]">Appointment</a>
    </div>
  </div>
  )
}

export default Navbar

