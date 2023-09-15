import React from "react";

const OfferCard = () => {
  return (
    <div className="p-5 flex-1 lg:p-10 bg-primary-dark even:bg-secondary-blue group">
      <div className="w-10 h-10 bg-gray-100 mb-3"></div>
      <h3 className="font-bigShoulder text-5xl uppercase font-bold mb-5 text-textBlue group-even:text-white before:absolute before:left-0 before:w-2 before:h-full relative group-odd:before:bg-secondary-blue group-even:before:bg-white">
        Web development
      </h3>
      <p className="text-textGray">
        I enhance web applications by creating intuitive and interactive user
        interfaces that elevate the overall user experience.
      </p>
    </div>
  );
};

export default OfferCard;
