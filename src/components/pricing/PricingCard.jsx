import React from "react";
import Features from "./Features";

const PricingCard = ({ plan }) => {
  const { planName, tagline, price, buttonText, isPopular } = plan;

  return (
    <div>
      <div className={`card w-96 bg-base-100 shadow-sm h-full ${isPopular ? "bg-blue-500 text-white" : ""}`}>
        <div className="card-body relative">
         {
            isPopular && ( <span className="badge badge-md rounded-full badge-warning absolute -top-2 right-35">Most Popular</span>)
         }
          <div className="">
            <h2 className="text-3xl font-bold">{planName}</h2>
            <p className={isPopular ? "text-white" : "text-gray-600"}>{tagline}</p>
          </div>
          <h2 className="text-5xl mt-2">{price}<span className="text-xl">/Month</span></h2>
          <ul className="mt-6 flex flex-col gap-2 text-xs grow">
            {plan.features.map((feature, index) => (
              <Features key={index} feature={feature} />
            ))}
          </ul>
          <div className="mt-6">
            <button className={`btn btn-block rounded-full ${!isPopular && "btn-primary"} ${isPopular && "text-blue-500"}`}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
