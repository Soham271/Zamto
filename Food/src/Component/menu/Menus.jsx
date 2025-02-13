import React from "react";
import "./Menus.css";
import { menu_list } from "../../assets/food-del-assets/assets/frontend_assets/assets";
import FullControl from "../../Page/FullControl";
const Menus = ({ category, setcategory }) => {
  function ClickImg(name) {
    setcategory((prev) => (prev === name ? "All" : name));
  }
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Menu</h1>
        <p className="explore-menu-text">
          Choose from a diverse menu featuring a delectable array of dishes,our
          mission crafted with love.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                className="explore-menu-list-item"
                key={index}
                onClick={() => ClickImg(item.menu_name)}
              >
                <img
                  src={item.menu_image}
                  alt=""
                  className={
                    category === item.menu_name ? "active" : item.menu_name
                  }
                ></img>
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Menus;
