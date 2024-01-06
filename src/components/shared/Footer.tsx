import React from "react";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Nav from "./Nav";
import lawalJimoh from "@/assets/png/lawalJimoh.png";

const Footer: React.FC = () => {
  const SOCIALS = [
    {
      name: "XTwitter",
      icon: <FaXTwitter />,
      href: "https://twitter.com/_Babayeju",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/fathi-babayeju",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      href: "https://github.com/c-blaq",
    },
  ];
  return (
    <footer className="px-4 border-t border-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-5 py-10">
          <div>
            <h2 className="font-velodrama text-xl md:text-2xl mb-5">
              <Link href="/" className="hover:text-textBlue">
                Fathi<span className="text-textBlue">&#x3B;</span>
              </Link>
            </h2>
            <p className="text-sm max-w-xl">
              A passionate front-end developer with a creative flair and a knack
              for turning ideas into beautiful, functional websites.
            </p>
          </div>

          <div className="shrink-0">
            <Nav className="flex items-center gap-4 lg:gap-12 text-sm justify-center" />
            <div className="flex gap-5 items-center justify-center sm:justify-end mt-5 text-xl">
              {SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="hover:text-textGray"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary-dark -mx-4 px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-10 sm:w-12 h-10 sm:h-12">
              <Image
                src={lawalJimoh}
                width={100}
                height={100}
                alt="Lawal Jimoh"
                className="object-cover shrink-0"
              />
            </div>
            <div>
              <h3>
                Designed by:{" "}
                <span className="text-sm sm:text-base font-medium">
                  Lawal Jimoh
                </span>
              </h3>
              <Link href="/" className="text-textBlue">
                website here
              </Link>
            </div>
          </div>

          <div>&copy;2023. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
