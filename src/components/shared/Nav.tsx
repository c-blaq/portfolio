import Link from "next/link";
import React from "react";

interface NavProp {
  className: string;
}
const Nav: React.FC<NavProp> = ({ className }) => {
  const NAV_ITEMS = [
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "My Resume",
      href: "/",
    },
    {
      label: "Let's Talk",
      href: "/",
    },
  ];
  return (
    <nav className={className}>
      {NAV_ITEMS.map(({ label, href }) => (
        <Link key={label} className="hover:text-textBlue" href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
