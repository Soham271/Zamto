import React, { useState } from "react";
import "./Logins.css"; // Make sure to import the updated styles
import { assets } from "../assets/food-del-assets/assets/frontend_assets/assets";

const LoginPop = ({ Setshowlogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const handleToggle = () => {
    setCurrState(currState === "Sign Up" ? "Sign In" : "Sign Up");
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => Setshowlogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <form className="titleto">
          <input type="text" placeholder="Enter Name" required></input>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{currState}</button>
        </form>
        <p onClick={handleToggle} className="toggle-text">
          {currState === "Sign Up"
            ? `Already have an account? Sign In`
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default LoginPop;
