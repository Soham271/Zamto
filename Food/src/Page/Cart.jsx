import React, { useContext } from "react";
import { StoreContext } from "../Context/ContextApi";
import "./Cart.css"; // Make sure to import your CSS
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitems, food_list, removefromcart, getTotal } =
    useContext(StoreContext);
  let navigate = useNavigate();
  function Hell() {
    navigate("/order");
  }
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartitems[item._id] > 0) {
            const totalPrice = (item.price * cartitems[item._id]).toFixed(2);
            return (
              <div key={item._id} className="cart-item-tile">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartitems[item._id]}</p>
                <p>${totalPrice}</p>
                <button
                  onClick={() => removefromcart(item._id)}
                  className="Billing"
                >
                  Remove
                </button>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <div className="cart-total-details">
            <p> Delivery Fee</p>
            <p>${getTotal() === 0 ? 0 : 2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotal() === 0 ? 0 : getTotal() + 2}</b>
          </div>

          <button className="Proceed" onClick={Hell}>
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You Have Promocode,Enter it Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter the PromoCode"></input>

              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
