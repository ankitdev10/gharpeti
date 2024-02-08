import Link from "next/link";

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
      name: "Sign up",
      to: "/user?q=signup",
    },
    {
      name: "Sign in",
      to: "/user?q=signin",
    },
  ];
  return (
    <nav className="w-full px-12 py-8 text-black flex items-center justify-around absolute z-10">
      <Link href={"/"}>
        <img
          src={"assets/logos/logo-no-background.svg"}
          alt=""
          className="w-32"
        />
      </Link>

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
