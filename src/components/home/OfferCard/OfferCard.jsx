import React from "react";

const OfferCard = () => {
  return (
    <div className="p-5 flex-1 lg:p-10 bg-primary-dark group hover:bg-secondary-blue group transition duration-300">
      <div className="w-10 h-10 bg-gray-100 mb-3"></div>
      <h3 className="font-bigShoulder text-2xl sm:text-4xl md:text-5xl uppercase font-bold mb-3 sm:mb-5 text-textBlue group-hover:text-white">
        Web development
      </h3>
      <p className="text-textGray text-sm sm:text-base">
        I enhance web applications by creating intuitive and interactive user
        interfaces that elevate the overall user experience.
      </p>
    </div>
  );
};

export default OfferCard;
