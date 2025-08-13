import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    deliveryInstructions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order submitted:', formData);
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Place Your Order
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Order Form */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Delivery Information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Instructions
                </label>
                <textarea
                  name="deliveryInstructions"
                  value={formData.deliveryInstructions}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Any special instructions for delivery..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                <img 
                  src={assets.food_1} 
                  alt="Food Item" 
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">Chicken Burger</h3>
                  <p className="text-sm text-gray-500">Quantity: 2</p>
                  <p className="text-lg font-bold text-tomato">$12.00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                <img 
                  src={assets.food_2} 
                  alt="Food Item" 
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">French Fries</h3>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                  <p className="text-lg font-bold text-tomato">$4.50</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t pt-4">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Subtotal:</span>
                <span>$28.50</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Delivery Fee:</span>
                <span>$2.99</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Tax:</span>
                <span>$2.28</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg sm:text-xl font-bold">
                <span>Total:</span>
                <span>$33.77</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Estimated Delivery Time</h3>
              <p className="text-sm text-blue-700">25-35 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
