import React from "react";
import CartsCard from "./cards/CartsCard";

const Cart = ({ cartItems, setCartItems }) => {
  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace("$", ""));
    return sum + numericPrice;
  }, 0);

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const processCheckout = () => {
    alert("Checkout successful!");
    setCartItems([]);
  }

  return (
    <div>
      <div className="border border-gray-200 rounded-2xl p-6 space-y-5">
        <h2 className="text-2xl font-bold text-left">Your cart</h2>
        {cartItems.map((item) => (
          <CartsCard handleRemoveFromCart={handleRemoveFromCart} key={item.id} item={item}></CartsCard>
        ))}
        <div className="flex justify-between items-center">
          <h3 className="text-[#627382] ">Total:</h3>
          <h3 className="text-2xl font-medium">${total.toFixed(2)}</h3>
        </div>
        <button onClick={processCheckout} className="btn btn-primary w-full rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
