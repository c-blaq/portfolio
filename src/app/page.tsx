import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { Provider, Content, Root, Arrow, Portal, Trigger } from "@/lib/tooltip";

import Hero from "@/components/shared/Hero";
import Offers from "@/components/home/Offers";
import Projects from "@/components/home/Projects";
import DiscussWMe from "@/components/shared/DiscussWMe";

export default async function Home() {
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
      <Hero
        heroText1="Fathi"
        heroText2="Babayeju"
        description=" A passionate front-end developer with a creative flair and a knack
            for turning ideas into beautiful, functional websites. With a
            meticulous attention to detail and a deep understanding of HTML,
            CSS, and JavaScript, I have mastered the art of crafting seamless
            user experiences."
      />
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
      <DiscussWMe />
    </>
  );
}
