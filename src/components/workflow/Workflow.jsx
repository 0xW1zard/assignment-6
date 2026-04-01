import React from "react";

const Workflow = () => {
  return (
    <div className="bg-blue-500 px-3.5">
      <div className="text-white container mx-auto text-center py-20 space-y-4">
        <h3 className="font-bold text-4xl">
          Ready to Transform Your Workflow?
        </h3>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="flex gap-3 justify-center mt-7">
            <button className="btn bg-white rounded-full text-blue-500 hover:bg-gray-200">Explore More</button>
            <button className="btn btn-outline rounded-full ">View Pricing</button>
        </div>
        <small>14-day free trial • No credit card required • Cancel anytime</small>
      </div>
    </div>
  );
};

export default Workflow; 
