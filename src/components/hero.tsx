import React from "react";
import { Button } from "./ui/button";
import { GiShoppingBag } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div
        className="relative min-h-[80vh] bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center custom-img"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 mt-24">
          <h1 className="mb-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Trusted{" "}
            <span className="text-green-500">Mobile Store for</span> Quality
            Smartphones and Latest Gadgets
          </h1>
          <p className="mb-8 text-lg md:text-xl font-medium bg-opacity-80  px-4 py-2 rounded-lg inline-block">
            Discover the latest smartphones, accessories, and gadgets at{" "}
            <span className="text-red-500 text-2xl font-bold">
              New Thar Mobile Shop
            </span>{" "}
            quality products with unbeatable prices and excellent service!
          </p>
          <div className="flex justify-center">
            <Button className="outline outline-offset-2 outline-1 group hover:rounded-3xl hover:outline-myOrange flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              <GiShoppingBag className="text-xl group-hover:text-myOrange group-hover:animate-bounce" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
