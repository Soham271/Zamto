import React from "react";
import { assets } from "../assets/food-del-assets/assets/frontend_assets/assets";
import Accordion from "../Component/Accoridon/Accordion";

const MobileApp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <p className="text-2xl font-bold mb-4">
          For Better Experience Download Tomato
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src={assets.play_store || "/placeholder.svg"}
            alt="Google Play Store"
            className="h-12"
          />
          <img
            src={assets.app_store || "/placeholder.svg"}
            alt="Apple App Store"
            className="h-12"
          />
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default MobileApp;
