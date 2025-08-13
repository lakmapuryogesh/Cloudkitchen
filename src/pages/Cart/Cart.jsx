import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart } = useContext(StoreContext);

  const cartItemsList = food_list.filter(item => cartItems[item._id] > 0);
  
  const totalAmount = cartItemsList.reduce((total, item) => {
    return total + (item.price * cartItems[item._id]);
  }, 0);

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Your Cart
        </h1>
        
        {cartItemsList.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <img 
              src={assets.basket_icon} 
              alt="Empty Cart" 
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 opacity-50"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Add some delicious items to get started!
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                  Cart Items ({cartItemsList.length})
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {cartItemsList.map(item => (
                    <div key={item._id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {item.description}
                        </p>
                        <p className="text-lg font-bold text-tomato mt-1">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                        >
                          <img src={assets.remove_icon_red} alt="Remove" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <span className="font-semibold text-sm sm:text-base min-w-[2rem] text-center">
                          {cartItems[item._id]}
                        </span>
                        <button
                          onClick={() => addToCart(item._id)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                        >
                          <img src={assets.add_icon_green} alt="Add" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-20">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Subtotal:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Delivery Fee:</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Tax:</span>
                    <span>${(totalAmount * 0.08).toFixed(2)}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg sm:text-xl font-bold">
                    <span>Total:</span>
                    <span>${(totalAmount + 2.99 + (totalAmount * 0.08)).toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-6">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
