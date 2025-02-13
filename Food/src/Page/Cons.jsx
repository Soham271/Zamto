import React from "react";
import { assets } from "../assets/food-del-assets/assets/frontend_assets/assets";

const Cons = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src={assets.tick_icon || "/placeholder.svg"}
        alt="Success"
        className="w-48 h-48 mb-8"
      />
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Your Order Has Been Successfully Placed 🤞
      </h2>
      <p className="text-xl text-gray-600">Thanks for Visiting Tomato! 😊</p>
    </div>
  );
};

export default Cons;
