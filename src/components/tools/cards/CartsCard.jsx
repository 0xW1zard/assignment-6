import React from "react";

const CartsCard = ({ item , handleRemoveFromCart}) => {

  const { imageUrl, title, price } = item;
  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-lg p-5">
      <div className="flex gap-3">
        <div className="border border-gray-300 w-fit rounded-full bg-white">
          <img className="p-3" src={imageUrl} alt={title} />
        </div>
        <div className="space-y-1.5 text-left">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-[#627382] font-medium">{price}</p>
        </div>
      </div>
      <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-ghost btn-sm text-red-400">Remove</button>
    </div>
  );
};

export default CartsCard;
