import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

function DiscussWMe() {
  return (
    <div className="py-10 lg:py-20 text-center bg-primary-dark">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bigShoulder leading-[140%] uppercase font-bold">
        Have an awesome project idea? <br /> <span>Let's discuss</span>
      </h2>

      <Link
        href="/"
        className="bg-secondary-blue-light hover:bg-secondary-blue transition duration-100 max-w-fit mx-auto mt-5 md:mt-10 flex items-center gap-1 py-2 px-4 rounded-sm"
      >
        Start your project <HiArrowRight />
      </Link>
    </div>
  );
}

export default DiscussWMe;
