import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-gray-300 py-24 px-5">
      <div className="container mx-auto">
        <div className="lg:flex justify-between gap-4 space-y-5">
          <div>
            <h2 className="text-4xl mb-2.5 text-white  font-bold">DigiTools</h2>
            <p>
              Premium digital tools for creators, <br /> professionals, and businesses.
              Work smarter <br />with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-wrap  gap-16 md:gap-24">
            <div className="flex flex-col">
              <h3 className="text-white text-lg font-medium mb-5">Product</h3>
              <ul className="flex flex-col gap-4 text-slate-300 text-sm">
                <li>
                  <a className="hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white text-lg font-medium mb-5">Company</h3>
              <ul className="flex flex-col gap-4 text-slate-300 text-sm">
                <li>
                  <a className="hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">Careers</a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">Press</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white text-lg font-medium mb-5">Resources</h3>
              <ul className="flex flex-col gap-4 text-slate-300 text-sm">
                <li>
                  <a className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-5">
              Social Links
            </h3>
            <div className="flex items-center gap-4 ">
              <a className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:opacity-80 transition-opacity">
                <TiSocialInstagram className="w-5 h-5 text-[#0f1123]" />
              </a>
              <a className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:opacity-80 transition-opacity">
                <TiSocialFacebook className="w-5 h-5 text-[#0f1123]" />
              </a>
              <a className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:opacity-80 transition-opacity">
                <TiSocialTwitter className="w-5 h-5 text-[#0f1123]" />
              </a>
            </div>
          </div>
        </div>
        <div className="divider divider-accent my-10 "></div>
        <div className="md:flex justify-between">
          <small>© 2026 Digitools. All rights reserved.</small>
          <div className="flex justify-between gap-10">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
