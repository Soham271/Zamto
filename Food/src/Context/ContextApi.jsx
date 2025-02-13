import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/food-del-assets/assets/frontend_assets/assets";
export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const [cartitems, Setcartitems] = useState({});
  const addtocart = (itemId) => {
    if (!cartitems[itemId]) {
      Setcartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      Setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removefromcart = (itemId) => {
    Setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotal = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          // Check if itemInfo is found
          total += itemInfo.price * cartitems[item];
        }
      }
    }
    return total;
  };

  useEffect(() => {}, [cartitems]);
  const ContextValue = {
    food_list,
    cartitems,
    Setcartitems,
    addtocart,
    removefromcart,
    getTotal,
  };
  return (
    <>
      <StoreContext.Provider value={ContextValue}>
        {children}
      </StoreContext.Provider>
    </>
  );
};
