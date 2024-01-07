import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { Provider, Content, Root, Arrow, Portal, Trigger } from "@/lib/tooltip";

import Hero from "@/components/Hero";
import Offers from "@/components/home/Offers";
import Projects from "@/components/home/Projects";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  const SKILLS = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <>
      <Hero />
      <section className="h-20 md:h-32">
        <div className="text-3xl sm:text-4xl md:text-5xl flex h-full justify-around items-center gap-5 max-w-7xl mx-auto">
          {SKILLS.map((skill, index) => (
            <div key={index} className="flex items-center justify-center">
              <Provider>
                <Root>
                  <Trigger
                    asChild
                    className="text-gray-500 hover:text-gray-600 "
                  >
                    {skill.icon}
                  </Trigger>
                  <Portal>
                    <Content
                      className="select-none rounded-[4px] bg-gray-500 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                      sideOffset={5}
                    >
                      {skill.name}
                      <Arrow className="fill-gray-500" />
                    </Content>
                  </Portal>
                </Root>
              </Provider>
            </div>
          ))}
        </div>
      </section>

      <Offers />
      <Projects />

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
    </>
  );
}
