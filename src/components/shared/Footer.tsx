import React from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa6";
import Nav from "./Nav";

const Footer: React.FC = () => {
  const SOCIALS = [
    {
      name: "XTwitter",
      icon: <FaXTwitter />,
      href: "/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "/",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      href: "/",
    },
  ];
  return (
    <footer className="px-4 py-10 border-t border-white">
      <div className="flex flex-col sm:flex-row justify-between gap-5 h-full max-w-7xl mx-auto">
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
    </footer>
  );
};

export default Footer;
