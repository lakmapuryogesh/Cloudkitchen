import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext =createContext(null);

const StoreContextProvider =(props)=>{

   const [cartItems,setCartItems] =useState({});
    
   const addToCart=(itemId)=>{
         if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
         }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
         }
   }

     const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentCount = prev[itemId] || 0;
      if (currentCount <= 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      } else {
        return { ...prev, [itemId]: currentCount - 1 };
      }
    });
  };


   useEffect(()=>{
    console.log(cartItems);
   },[cartItems])

    const contextValue={
     food_list ,
     cartItems,
     setCartItems,
     addToCart,
     removeFromCart      
    }

    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider