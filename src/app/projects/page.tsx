import { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import Card from "@/components/shared/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import DiscussWMe from "@/components/shared/DiscussWMe";
import { getProjects } from "@/api/project";

export const metadata: Metadata = {
  title: "Projects | Fathi Babayeju",
  description:
    "Here are some of my exceptional projects, showcasing my diverse portfolio and my expertise in front-end development.",
};

const Projects: React.FC = async () => {
  const projects = await getProjects();

  return (
    <>
      <Hero
        heroText1="All"
        heroText2="Projects"
        description="Here are some of my exceptional projects, showcasing my diverse portfolio and my expertise in front-end development."
        showGreeting={false}
      />
      <div className="py-10 sm:py-20 px-5">
        <section className="max-w-7xl mx-auto">
          <SectionTitle
            title="Explore some of my best featured projects"
            description="Here are some of my exceptional projects, showcasing my diverse portfolio and my expertise in front-end development."
          />

          <div className="mt-10 sm:mt-16 md:mt-20 gap-5 grid sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project._id} project={project} />
            ))}
          </div>
        </section>
      </div>
      <DiscussWMe />
    </>
  );
};

export default Projects;
