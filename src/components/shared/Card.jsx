import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "@/lib/reactIcons";

const Card = () => {
  return (
    <div className="bg-primary-dark  even:bg-secondary-blue group">
      <div className="bg-primary-dark2 min-h-[200px]"></div>
      <div className="pt-5 p-10">
        <h3 className="font-bigShoulder font-bold leading-[140%] uppercase mb-5 text-2xl sm:text-3xl lg:text-4xl">
          Modem - Marketing agency portfolio website
        </h3>

        <div className="flex gap-4 justify-between">
          <div className="flex gap-2">
            <label className="text-xs text-textGray group-even:bg-secondary-blue-light bg-gray-700 p-2">
              React
            </label>
            <label className="text-xs text-textGray bg-gray-700 group-even:bg-secondary-blue-light p-2">
              React
            </label>
          </div>

          <Link
            href="/"
            className="bg-gray-700 group-even:bg-secondary-blue-light p-2 transition duration-100 hover:bg-gray-800 group-even:hover:bg-blue-500"
          >
            <HiArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
