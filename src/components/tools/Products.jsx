import React, { useState } from "react";
import Features from "../pricing/Features.jsx";
import { toast } from "react-toastify";



const Products = ({ item, handleAddToCart }) => {

  const [isAdded, setIsAdded] = useState(false);

  const { imageUrl, badge, title, description, price, billingCycle } = item;

  const productBuy = () => {
    setIsAdded(true);
    handleAddToCart(item);
    toast.success("Product added to cart!")
  };
  return (
    <div className="border border-gray-300 rounded-lg text-left p-6 space-y-5 h-full flex flex-col">
      <div className="flex justify-end">
        {badge === "Best Seller" ? (
          <p className="bg-amber-100 w-fit py-1 px-2.5 rounded-full text-amber-700 text-sm font-medium">
            Best Seller
          </p>
        ) : badge === "Popular" ? (
          <p className=" bg-blue-100 text-blue-700 w-fit py-1 px-2.5 rounded-full text-sm font-medium">
            Popular
          </p>
        ) : (
          <p className="bg-green-100 text-green-700 w-fit py-1 px-2.5 rounded-full text-sm font-medium">
            New
          </p>
        )}
      </div>
      <div className="border border-gray-300 w-fit rounded-full -mt-5">
        <img className="p-3.5" src={imageUrl} alt={title} />
      </div>
      <h3 className="text-2xl font-bold ">{title}</h3>
      <p className="text-[#627382]">{description}</p>
      <h3 className="text-2xl font-bold">
        {price}
        <span className="text-[#627382] text-[16px] font-normal">
          {billingCycle}
        </span>
      </h3>
      <ul className="text-left space-y-1 grow">
        {item.features.map((feature, index) => (
          <Features key={index} feature={feature} />
        ))}
      </ul>
      <button
        className={`btn w-full rounded-full ${isAdded ? "btn-success text-white" : "btn-primary"}`}
        onClick={productBuy} 
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Products;
