import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {AiOutlineMenuFold }  from 'react-icons/ai';
import {AiOutlineClose } from 'react-icons/ai';
import {HiShoppingCart } from 'react-icons/hi';
import Cart from '../Cart/Cart';
import "./Navbar.scss"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [open,setOpen] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const products = useSelector(state=>state.cart.products);
return (
  <>
    <nav className="navbar">
      <div className="navbar-container container">
          <div className="navbar-logo">
            Gausiya Boutique
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose/> : <AiOutlineMenuFold/>}
          </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products/1"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              WOMEN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products/2"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              KIDS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products/3"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              JEWELLERY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              ABOUT
            </NavLink>
          </li> 
        </ul>
        <div className='serch'>
           <divc className="cartIcon" onClick={()=>setOpen(!open)}>
            <HiShoppingCart/>
            <span>{products.length}</span>
           </divc>
        </div>
      </div>
      {open && <Cart/>}
    </nav>
</>
)};
export default Navbar;