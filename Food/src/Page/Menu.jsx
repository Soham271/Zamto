import React, { useState } from "react";
import Menus from "../Component/menu/Menus";
import FoodDisplay from "../Component/FoodDisplay/FoodDisplay";

const Menu = () => {
  let [category, setcategory] = useState("All");
  return (
    <div className="container mx-auto px-4 py-8">
      <Menus category={category} setcategory={setcategory} />
      <FoodDisplay category={category} setcategory={setcategory} />
    </div>
  );
};

export default Menu;
