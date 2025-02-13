import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open index
  const data = [
    {
      id: "1",
      name: "Popular Food",
      content:
        "Greek Salad:-Food COntain Green Vegetable good for Helath. Fruit IceCream contain Dryfruits, Noodle consist some famous Noodle like veg Chowemin etc many More famous dish",
    },
    {
      id: "2",
      name: "Rating of Your Website",
      content:
        "By Customer Review on Social Platform is 4.5 out 5, We are Glad to privide them Such a Serve, and We didn't Employee as Employee we treat them as Family memeber",
    },
    {
      id: "3",
      name: "Location Of Headquarter",
      content:
        "The Taj Mahal Palace is a heritage, five-star, luxury hotel in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India.",
    },
    {
      id: "4",
      name: "How to Download the Tomato",
      content:
        "TO Download Tomato Frist Go on playstore search name tomato and click on install and to download from website click on navbarsection mobileapp click on googleplay icon if andriod and if you are apple user the click on app store follow step 1",
    },
  ];

  const toggleAccordion = (index) => {
    // If the clicked index is already open, close it; otherwise, open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <h3 onClick={() => toggleAccordion(index)}>
            {item.name} <span>{openIndex === index ? "-" : "+"}</span>
          </h3>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </>
  );
};

export default Accordion;
