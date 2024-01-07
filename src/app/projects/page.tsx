import Hero from "@/components/shared/Hero";
import Card from "@/components/shared/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import DiscussWMe from "@/components/shared/DiscussWMe";

const Projects: React.FC = () => {
  return (
    <>
      <Hero />
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
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
      <DiscussWMe />
    </>
  );
};

export default Projects;
