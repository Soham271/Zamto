import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/menu");
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with love.
        </p>
        <button onClick={handleNavigation} className="navi">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
