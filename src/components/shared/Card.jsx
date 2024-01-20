import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "@/lib/reactIcons";

const Card = () => {
  return (
    <div className="bg-primary-dark transition-all duration-300 hover:bg-secondary-blue group">
      <div className="bg-primary-dark2 min-h-[150px] sm:min-h-[200px]"></div>
      <div className="pt-5 p-4 lg:p-10">
        <div className="mb-5 ">
          <h3 className="font-bigShoulder font-bold leading-[140%] uppercase mb-3 text-2xl sm:text-3xl lg:text-4xl">
            Modem
          </h3>
          <p className="text-sm">
            Marketing agency portfolio website - Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit, repellendus?
          </p>
        </div>

        <div className="flex gap-4 justify-between">
          <div className="flex gap-2">
            <label className="text-xs text-textGray group-hover:bg-secondary-blue-light bg-gray-700 p-2">
              React
            </label>
            <label className="text-xs text-textGray bg-gray-700 group-hover:bg-secondary-blue-light p-2">
              React
            </label>
          </div>

          <Link
            href="/"
            className="bg-gray-700 group-hover:bg-secondary-blue-light p-2 transition duration-200 group-hover:hover:bg-gray-700"
          >
            <HiArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
