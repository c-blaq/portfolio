"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const NAV_ITEMS = [
    {
      label: "Projects",
      href: "/projects",
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
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="absolute z-20 top-0 right-0 left-0 px-4 h-20">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <h2 className="font-velodrama text-xl md:text-2xl">
          <Link href="/" className="hover:text-textBlue-dark">
            Fathi<span className="text-textBlue-dark">&#x3B;</span>
          </Link>
        </h2>

        <nav className="hidden md:flex items-center gap-4 lg:gap-12">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link key={label} className="hover:text-textBlue-dark" href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="block md:hidden">
          <button className="text-xl" onClick={showDrawer}>
            <MenuUnfoldOutlined />
          </button>
        </div>

        <Drawer
          placement="left"
          onClose={onClose}
          open={open}
          width="45%"
          className="!bg-neutral-200"
        >
          <nav className="flex flex-col gap-4  text-black">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={label}
                className="hover:text-neutral-white hover:bg-primary-dark hover:px-2 py-2 rounded-sm"
                href={href}
                onClick={onClose}
              >
                {label}
              </Link>
            ))}
          </nav>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
