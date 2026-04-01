import React from "react";
import StepCard from "./StepCard";
import Stepdata from "../../assets/JSON/setp.json";

const Steps = () => {
  return (
    <div className=" bg-[#F9FAFC] py-24 ">
      <div className="container mx-auto text-center ">
        <h2 className="text-5xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="text-[#627382] mt-2.5">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="flex gap-5 justify-center mt-12">
          {Stepdata.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
