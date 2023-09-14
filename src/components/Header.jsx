import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-0 px-4 h-20">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <h2 className="font-velodrama hover:text-textBlue-dark text-xl md:text-2xl">
          <Link href="/">
            Fathi<span className="text-textBlue-dark">&#x3B;</span>
          </Link>
        </h2>

        <nav className="flex items-center gap-4 lg:gap-12">
          <Link className="hover:text-textBlue-dark" href="/projects">
            Projects
          </Link>
          <Link
            className="hover:text-textBlue-dark"
            href="https://twitter.com"
            target="_blank"
          >
            My Resume
          </Link>
          <Link className="hover:text-textBlue-dark" href="/about">
            Let&lsquo; Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
