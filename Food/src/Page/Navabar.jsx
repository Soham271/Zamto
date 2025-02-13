import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { assets as adminAssets } from "../assets/food-del-assets/assets/admin_assets/assets";
import { assets as frontendAssets } from "../assets/food-del-assets/assets/frontend_assets/assets";
import LoginPop from "../Login/LoginPop";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPop Setshowlogin={setShowLogin} />}
      <div className="navbar">
        <NavLink to="/">
          <img
            src={adminAssets.logo}
            alt="logo"
            className="logo"
            style={{ height: "150px", width: "200px" }}
          />
        </NavLink>
        <ul className="navbar-menu">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/menu" activeClassName="active">
            Menu
          </NavLink>
          <NavLink to="/app" activeClassName="active">
            Mobile App
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </ul>
        <div className="navbar-right">
          <img src={frontendAssets.search_icon} alt="Search Icon" />
        </div>
        <NavLink to="/cart">
          <div className="navbar-search-icon">
            <img src={frontendAssets.basket_icon} alt="Basket Icon" />
          </div>
        </NavLink>
        <div className="navbar-button">
          <button className="navbar-buttons" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
