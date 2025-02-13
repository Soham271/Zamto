import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../Context/ContextApi";
import { useNavigate } from "react-router";
const Placeorder = () => {
  let { getTotal } = useContext(StoreContext);
  let navigate = useNavigate();
  function thanks() {
    navigate("/confirm");
  }
  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title"> Delivery Information</p>
          <div className="mutli-fields">
            <input type="text" placeholder="FristName" />
            <input type="text" placeholder="LastName" />
          </div>
          <input type="email" placeholder="Email address"></input>
          <input type="text" placeholder="street"></input>
          <div className="mutli-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="mutli-fields">
            <input type="text" placeholder="Pincode" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="phonenumber" placeholder="Phone no"></input>
        </div>
        <div className="place-order-right">
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

            <button className="Proceed" onClick={thanks}>
              Proceed To Payment
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Placeorder;
