import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext =createContext(null);

const StoreContextProvider =(props)=>{

   const [cartItems,setCartItems] =useState({});
   const [searchQuery, setSearchQuery] = useState("");
    
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

  // Calculate total cart count
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  // Search functionality
  const searchFood = (query) => {
    setSearchQuery(query);
  };

  // Get filtered food list based on search query
  const getFilteredFoodList = () => {
    if (!searchQuery.trim()) {
      return food_list;
    }
    
    const query = searchQuery.toLowerCase();
    return food_list.filter(food => 
      food.name.toLowerCase().includes(query) ||
      food.description.toLowerCase().includes(query) ||
      food.category.toLowerCase().includes(query)
    );
  };

   useEffect(()=>{
    console.log(cartItems);
   },[cartItems])

    const contextValue={
     food_list,
     cartItems,
     setCartItems,
     addToCart,
     removeFromCart,
     getCartCount,
     searchQuery,
     searchFood,
     getFilteredFoodList      
    }

    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider