import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // 🔥 added state for hamburger toggle
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>  
      {/* 🔥 Hamburger Menu on the Left */}
      <div className='navbar-left'>

      {/* <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar bar1 ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar bar2 ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar bar3 ${isOpen ? 'open' : ''}`}></div>
        </div> */}
        
        <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar bar1 ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar bar2 ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar bar3 ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>

 {/* <ul className={`navbar-menu ${isOpen ? 'show' : ''}`}>
        <li className={menu=='home'?"active":""}>home</li>
        <li className={menu=='menu'?"active":""}>menu</li>
        <li className={menu=='mobile-app'?"active":""}>mobile-app</li>
        <li className={menu=='contact-us'?"active":""}>contact us</li>
      </ul> */}
   
      <ul className={`navbar-menu ${isOpen ? 'show' : ''}`}>
        <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon"> 
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
