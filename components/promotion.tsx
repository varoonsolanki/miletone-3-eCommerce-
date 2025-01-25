import React from "react";

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Promotions Start Here */} 

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1st Child */}
        <div
          className="hero h-[25rem] promo-1 rounded-xl"
        >
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get upto <span className="text-myOrange">15%</span> off</h1>
              <p className="scroll-m-20 text-base font-medium tracking-tight text-myWhite mt-2">
                Flash Sale, get upto 15% off on the Smartphones. 
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Child */}
        <div
          className="hero h-[25rem] promo-2 rounded-xl"
        >
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get upto <span className="text-myOrange">40%</span> off</h1>
              <p className="scroll-m-20 text-base font-medium tracking-tight text-myWhite mt-2">
                Flash Sale, get upto 40% off on the Mobile Accessories.  
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Promotion;