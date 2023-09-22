import React from "react";
import OfferCard from "./OfferCard/OfferCard";
import SectionTitle from "../shared/SectionTitle";
import Card from "../shared/Card";
import Link from "next/link";
import { HiArrowRight } from "@/lib/reactIcons";

const Offers = () => {
  return (
    <>
      <div className="bg-primary-dark2 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="What I can do to help you build your product"
            description="With a flick of the code and a dash of creativity, I conjure up
            captivating websites and web applications that leave users
            spellbound."
          />

          <div className="mt-20 flex gap-5">
            <OfferCard />
            <OfferCard />
          </div>
        </div>
      </div>

      <div className="py-20 px-5">
        <section className="max-w-7xl mx-auto">
          <SectionTitle
            title="Explore some of my best featured projects"
            description="Here are some of my exceptional projects, showcasing my diverse portfolio and my expertise in front-end development."
          />

          <div className="mt-20 gap-5 grid grid-cols-3">
            <Card />
            <Card />
            <Card />
          </div>
          <Link
            href="/"
            className="bg-secondary-blue-light hover:bg-secondary-blue transition duration-100 max-w-fit ml-auto mt-5 flex  items-center gap-1 py-2 px-4 rounded-sm"
          >
            All projects <HiArrowRight />
          </Link>
        </section>
      </div>
    </>
  );
};

export default Offers;
