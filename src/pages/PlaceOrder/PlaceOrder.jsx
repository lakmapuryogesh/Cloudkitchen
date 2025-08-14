import React, { useContext, useMemo } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  const deliveryFee = 2; // fixed delivery fee

  // Calculate subtotal (same as Cart)
  const subtotal = useMemo(() => {
    return food_list.reduce((acc, item) => {
      return acc + (cartItems[item._id] > 0 ? item.price * cartItems[item._id] : 0);
    }, 0);
  }, [cartItems, food_list]);

  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  return (
    <form className="mt-20 px-6 lg:px-20 py-10 flex gap-10">
      {/* Delivery Info - Left Side */}
      <div className="w-2/3 space-y-4">
        <p className="text-lg font-semibold">Delivery Information</p>
        <div className="flex gap-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded w-1/2" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded w-1/2" />
        </div>
        <input type="email" placeholder="Email address" className="border p-2 rounded w-full" />
        <input type="text" placeholder="Street" className="border p-2 rounded w-full" />
        <div className="flex gap-4">
          <input type="text" placeholder="Zip code" className="border p-2 rounded w-1/2" />
          <input type="text" placeholder="Country" className="border p-2 rounded w-1/2" />
        </div>
        <input type="text" placeholder="Phone" className="border p-2 rounded w-full" />
      </div>

      {/* Cart Totals - Right Side */}
      <div className="w-1/3 space-y-2">
        <p className="text-lg font-semibold">Cart Totals</p>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          type="submit"
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition"
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
