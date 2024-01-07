import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Card from "../shared/Card";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

function Projects() {
  return (
    <div className="py-10 sm:py-20 px-5">
      <section className="max-w-7xl mx-auto">
        <SectionTitle
          title="Explore some of my best featured projects"
          description="Here are some of my exceptional projects, showcasing my diverse portfolio and my expertise in front-end development."
        />

        <div className="mt-10 sm:mt-16 md:mt-20 gap-5 grid sm:grid-cols-2 lg:grid-cols-3">
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
  );
}

export default Projects;
