import React from "react";
import OfferCard from "./OfferCard/OfferCard";
import SectionTitle from "../shared/SectionTitle";

const Offers = () => {
  return (
    <div className="bg-primary-dark2 py-10 sm:py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="What I can do to help you build your product"
          description="With a flick of the code and a dash of creativity, I conjure up
            captivating websites and web applications that leave users
            spellbound."
        />

        <div className="mt-10 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-5">
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </div>
  );
};

export default Offers;
