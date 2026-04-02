import React from "react";
import CartsCard from "./cards/CartsCard";
import { toast } from "react-toastify";

const Cart = ({ cartItems, setCartItems, setCurrentTab }) => {
  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace("$", ""));
    return sum + numericPrice;
  }, 0);

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    toast.info("Item removed from cart.");
  };

  const processCheckout = () => {
    toast.success("Checkout successful! Thank you for your purchase.");
    setCartItems([]);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="border border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center space-y-5 text-center min-h-100">
          <div className="bg-gray-100 p-6 rounded-full text-gray-400 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>
          <p className="text-[#627382] max-w-sm">
            Looks like you haven't added any premium digital tools to your cart
            yet.
          </p>

          <button
            className="btn btn-primary rounded-full mt-2 px-8"
            onClick={() => setCurrentTab("Product")}
          >
            Explore Products
          </button>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-2xl p-6 space-y-5">
          <h2 className="text-2xl font-bold text-left">Your cart</h2>
          {cartItems.map((item) => (
            <CartsCard
              handleRemoveFromCart={handleRemoveFromCart}
              key={item.id}
              item={item}
            ></CartsCard>
          ))}
          <div className="flex justify-between items-center">
            <h3 className="text-[#627382] ">Total:</h3>
            <h3 className="text-2xl font-medium">${total.toFixed(2)}</h3>
          </div>
          <button
            onClick={processCheckout}
            className="btn btn-primary w-full rounded-full"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
