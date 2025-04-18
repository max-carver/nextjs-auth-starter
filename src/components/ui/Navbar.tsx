"use client";

import Link from "next/link";

const links = [
  {
    label: "Link One",
    href: "#",
  },
  {
    label: "Link One",
    href: "#",
  },
  {
    label: "Link One",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <header className=" bg-red-500">
      <nav className="container mx-auto flex items-center justify-between w-full">
        <Link href="/">Home</Link>

        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link href={link.href}>{link.label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
