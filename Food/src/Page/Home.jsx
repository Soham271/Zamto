import React, { useState } from "react";
import Header from "../Component/Header/Header";
import Menus from "../Component/menu/Menus";
import FoodDisplay from "../Component/FoodDisplay/FoodDisplay";
import Section from "../Component/section/Section";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  let [category, setcategory] = useState("All");
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Menus category={category} setcategory={setcategory} />
        <FoodDisplay category={category} setcategory={setcategory} />
        <Section />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
