import React from "react";

const StatusBar = () => {
  return (
    <div className="bg-blue-500 text-white">
      <div className=" p-10 mx-auto flex justify-evenly mt-10 ">
        <div className=" flex flex-col justify-center gap-1 text-center">
          <h2 className="text-4xl font-bold">50K+</h2>
          <h4 className=" text-white">Active Users</h4>
        </div> 
        <div className="divider divider-horizontal before:bg-[#ffffff80] after:bg-[#ffffff80]"></div>
        <div className="flex flex-col justify-center gap-1 text-center">
          <h2 className="text-4xl font-bold">200+</h2>
          <h4 className=" text-white">Premium Tools</h4>
        </div>
        <div className="divider divider-horizontal before:bg-[#ffffff80] after:bg-[#ffffff80]"></div>
        <div className="flex flex-col justify-center gap-1 text-center">
          <h2 className="text-4xl font-bold">4.9</h2>
          <h4 className=" text-white">Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
