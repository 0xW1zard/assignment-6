import { Play } from "lucide-react";
import React from "react";
import badge from "/img/badge.png";
import heroImg from "/img/banner.png";


const Hero = () => {
    return (
        <div className="container mx-auto lg:flex items-center justify-around my-14 gap-4 p-4 md:p-0 ">
            <div className="space-y-5">
                <div className="py-2 px-4 w-fit rounded-full text-purple-600 bg-[#E1E7FF] flex items-center gap-2"><img className="w-4 h-4" src={badge} alt="" /> New: AI-Powered Tools Available</div>
                <h1 className="text-7xl font-extrabold">
                    Supercharge Your <br /> Digital Workflow
                </h1>
                <p className="text-[#627382]">
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br /> Explore
                    Products
                </p>
                <div className="flex gap-3">
                    <button className="btn btn-primary rounded-3xl">Explore More</button>
                    <button className="btn btn-outline btn-primary rounded-3xl"><Play /> Demo</button>
                </div>
            </div>
            <div>
                <img className="mt-10 mx-auto" src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;
