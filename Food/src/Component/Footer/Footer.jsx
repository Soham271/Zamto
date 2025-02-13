import React from "react";
import { assets } from "../../assets/food-del-assets/assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  function clickme() {
    <link to="https://www.linkedin.com/feed/?trk=public_post_google-one-tap-submit"></link>;
  }
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quas tempore non blanditiis quaerat fugit labore consequuntur nam
            numquam expedita vero accusamus iste perferendis nesciunt, amet
            earum laudantium aperiam facere.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@zamto.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        Copyright 2024 &copy; Zamto.com - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
