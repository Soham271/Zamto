import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Navabar from "./Navabar";
import Home from "./Home";
import Menu from "./Menu";
import MobileApp from "./MobileApp";
import Contact from "./Contact";
import Cart from "./Cart";
import Placeorder from "./Placeorder";
import Cons from "./Cons";

const FullControl = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navabar />
          <Home />
        </div>
      ),
    },
    {
      path: "/menu",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navabar />
          <Menu />
        </div>
      ),
    },
    {
      path: "/app",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navabar />
          <MobileApp />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navabar />
          <Contact />
        </div>
      ),
    },
    {
      path: "/cart",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navabar />
          <Cart />
        </div>
      ),
    },
    {
      path: "/order",
      element: <Placeorder />,
    },
    {
      path: "/confirm",
      element: <Cons />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default FullControl;
