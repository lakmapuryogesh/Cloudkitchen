import React, { useContext, useMemo, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoMessage, setPromoMessage] = useState("");
 
  const navigate=useNavigate();
  const deliveryFee = 2; // fixed delivery fee in ₹

  // Calculate subtotal
  const subtotal = useMemo(() => {
    return food_list.reduce((acc, item) => {
      return acc + (cartItems[item._id] > 0 ? item.price * cartItems[item._id] : 0);
    }, 0);
  }, [cartItems, food_list]);

  // Apply promo code discount
  const discount = appliedPromo ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal > 0 ? subtotal + deliveryFee - discount : 0;

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      setPromoMessage("Please enter a promo code");
      return;
    }

    // Simulate promo code validation
    const validPromoCodes = ["SAVE10", "WELCOME", "FOOD20"];
    
    if (validPromoCodes.includes(promoCode.toUpperCase())) {
      setAppliedPromo(promoCode.toUpperCase());
      setPromoMessage("Promo code applied successfully! 10% discount added.");
      setTimeout(() => setPromoMessage(""), 3000);
    } else {
      setPromoMessage("Invalid promo code. Try SAVE10, WELCOME, or FOOD20");
      setTimeout(() => setPromoMessage(""), 3000);
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoMessage("Promo code removed");
    setTimeout(() => setPromoMessage(""), 2000);
  };

  return (
    <div className="mt-20 px-6 lg:px-20 py-10">
      {/* Cart Header */}
      <div className="grid grid-cols-6 font-bold border-b pb-2 text-gray-700">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id} className="grid grid-cols-6 items-center py-4 border-b">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{(item.price * cartItems[item._id]).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                X
              </button>
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals & Promo Code */}
      {subtotal > 0 && (
        <div className="flex gap-10 items-start w-full mt-8 pr-8">
          {/* Cart totals on the left */}
          <div className="w-1/2 space-y-2">
            <p className="text-lg font-semibold">Cart Totals</p>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>${deliveryFee}</span>
            </div>
            {appliedPromo && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({appliedPromo})</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition"
              onClick={()=>navigate('/order')}>
            PROCEED TO CHECKOUT
          </button>
          </div>

          {/* Promo code on the right */}
          <div className="w-1/3 flex flex-col items-end space-y-2">
            <p className="font-semibold mb-2 pr-8">If you have a promo code, Enter it here:</p>
            <div className="flex flex-col ml-8 gap-2 w-full">
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="border border-gray-300 rounded px-3 py-2 flex-1"
                  disabled={appliedPromo}
                />
                {!appliedPromo ? (
                  <button 
                    onClick={handleApplyPromo}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Apply
                  </button>
                ) : (
                  <button 
                    onClick={handleRemovePromo}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
              {promoMessage && (
                <p className={`text-sm ${promoMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {promoMessage}
                </p>
              )}
              <p className="text-xs text-gray-500">
                Try: SAVE10, WELCOME, FOOD20
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Empty Cart Message */}
      {subtotal === 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
