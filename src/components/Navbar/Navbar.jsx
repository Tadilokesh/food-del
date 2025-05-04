import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>  
      {/* Left section with hamburger menu (visible on mobile) */}
      <div className='navbar-left'>
        <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar bar1 ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar bar2 ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar bar3 ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {/* Logo - optimized for both desktop and mobile */}
      <Link to='/'><img src={assets.logo} alt="Tomato" className="logo" /></Link>

      {/* Navigation menu - shows/hides based on hamburger click */}
      <div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
        <Link to="/" onClick={() => { setMenu("home"); setIsOpen(false); }} 
              className={menu === "home" ? "active" : ""}>
          home
        </Link>
        <a href='#explore-menu' onClick={() => { setMenu("menu"); setIsOpen(false); }} 
           className={menu === "menu" ? "active" : ""}>
          menu
        </a>
        <a href='#app-download' onClick={() => { setMenu("mobile-app"); setIsOpen(false); }} 
           className={menu === "mobile-app" ? "active" : ""}>
          mobile-app
        </a>
        <a href='#footer' onClick={() => { setMenu("contact us"); setIsOpen(false); }} 
           className={menu === "contact us" ? "active" : ""}>
          contact us
        </a>
      </div>

      {/* Right section with search, cart and sign-in button */}
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon"> 
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          {/* Only show dot if cart is not empty */}
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;