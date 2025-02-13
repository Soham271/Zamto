import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/food-del-assets/assets/frontend_assets/assets";
import { StoreContext } from "../../Context/ContextApi";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartitems, addtocart, removefromcart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food" src={image} alt={name} />
        {!cartitems[id] ? (
          <img
            className="add"
            onClick={() => addtocart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removefromcart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartitems[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
              alt="Add more"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-price">${price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
