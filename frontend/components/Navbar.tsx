import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const LIST_ITEMS = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Properties",
      to: "/properties",
    },
    {
      name: "Sign Up",
      to: "/user?q=signup",
    },
    {
      name: "Sign In",
      to: "/user?q=signin",
    },
  ];
  return (
    <nav className="w-4/5 px-12 py-8 text-black flex items-center justify-between absolute z-10">
      <img
        src={"assets/logos/logo-no-background.svg"}
        alt=""
        className="w-32"
      />

      <ul className="flex gap-4">
        {LIST_ITEMS.map((item, key) => (
          <li key={key}>
            <Link href={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
