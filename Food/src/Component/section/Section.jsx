import React from "react";
import "./Section.css";
import image1 from "../../Component/section/jpeg-optimizer_2151336570.jpg"; // Adjust path
import image2 from "../../Component/section/c4150d205678145.Y3JvcCwxNjE2LDEyNjQsMCww.png"; // Adjust path

const Section = () => {
  return (
    <>
      <div className="img-container">
        {" "}
        {/* Corrected typo from img-conatiner to img-container */}
        <div
          className="display-1"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <h2>The Best Chief</h2>
          <p>
            Serve the best food in your city and awesome rating over all
            restaurant in your city.
          </p>
        </div>
        <div
          className="display-2"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <h2> Fresh-Food & Vegetable</h2>
          <p>
            Serve you the fresh vegetables from farms and well-maintained
            hygiene restaurant, good light taste food.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
