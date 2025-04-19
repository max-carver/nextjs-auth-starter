"use client";

import Link from "next/link";

const links = [
  {
    label: "Link One",
    href: "#",
  },
  {
    label: "Link Two",
    href: "#",
  },
  {
    label: "Link Three",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <header className=" border-b h-16">
      <nav className="container mx-auto flex items-center justify-between w-full h-full">
        <Link href="/">Home</Link>

        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
