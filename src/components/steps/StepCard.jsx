import { Package, Rocket, User } from "lucide-react";
import React from "react";

const StepCard = ({ step }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-6  max-w-80 h-80 shadow bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white py-2 px-2.75 rounded-full w-fit">
          {step.id}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <div className="bg-cyan-200 w-fit p-3 rounded-full">
          {step.icon === "User" ? (
            <User className="w-11 h-11 text-blue-600" />
          ) : step.icon === "Package" ? (
            <Package className="w-11 h-11 text-blue-600" />
          ) : (
            <Rocket className="w-11 h-11 text-blue-600" />
          )}
        </div>
        <h3 className="font-bold text-xl">{step.title}</h3>
        <p className="text-[#627382]">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;
