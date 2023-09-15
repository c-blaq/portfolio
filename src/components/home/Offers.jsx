import React from "react";
import OfferCard from "./OfferCard/OfferCard";

const Offers = () => {
  return (
    <div className="bg-primary-dark2 py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end">
          <h2 className="text-6xl font-bigShoulder leading-[140%] uppercase font-bold w-1/2">
            What I can do to help you build your product
          </h2>
          <p className="text-xl max-w-[450px] leading-[140%]">
            With a flick of the code and a dash of creativity, I conjure up
            captivating websites and web applications that leave users
            spellbound.
          </p>
        </div>

        <div className="mt-20 flex gap-5">
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </div>
  );
};

export default Offers;
