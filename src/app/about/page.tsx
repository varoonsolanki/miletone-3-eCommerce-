import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          About <span className="text-green-600">New Thar Mobile Shop</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to New Thar Mobile Shop! We are your trusted destination for
          the latest smartphones, accessories, and gadgets. Located in the 
          Shahi Bazar, Khawaja Market Naukot, we offer unbeatable prices and
          exceptional customer service. Whether you are looking for the newest
          tech or reliable repairs, we have got you covered!
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Wide Range of Products
            </h3>
            <p className="text-gray-600">
              Explore a vast collection of smartphones, accessories, and
              gadgets from top brands, all under one roof.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Get the best deals and unbeatable prices on all our products,
              ensuring value for your money.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Excellent Customer Service
            </h3>
            <p className="text-gray-600">
              Experience friendly and professional service every time you visit
              us. Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
