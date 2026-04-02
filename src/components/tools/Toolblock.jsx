import React, { useState } from "react";
import { use } from "react";
import Cart from "./Cart";
import Products from "./Products";

const Toolblock = ({ toolData, cartItems, handleAddToCart, setCartItems }) => {
  const data = use(toolData);

  const [currentTab, setCurrentTab] = useState("Product");

  return (
    <div className="container mx-auto text-center my-20 px-3">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="border border-gray-200 w-fit rounded-full mx-auto p-1 my-4 flex gap-2">
          <button
            className={`btn ${currentTab === "Product" ? "btn-primary" : ""} rounded-full`}
            onClick={() => setCurrentTab("Product")}
          >
            Products
          </button>
          <button
            className={`btn ${currentTab === "Cart" ? "btn-primary" : ""} rounded-full`}
            onClick={() => setCurrentTab("Cart")}
          >
            Cart({cartItems.length})
          </button>
        </div>
        <div className="mt-10">
          {currentTab === "Product" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.map((item) => (
                <Products
                  key={item.id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div>
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems} 
                setCurrentTab={setCurrentTab}
              ></Cart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toolblock;
