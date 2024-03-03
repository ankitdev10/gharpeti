import { cookies } from "next/headers";
import Link from "next/link";
import { Logout } from "./logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token")?.value;

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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>

        {token ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none ring-0">
              Profile
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Logout />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <li>
              <Link href="/user?q=signup">Sign up</Link>
            </li>
            <li>
              <Link href="/user?q=signin">Sign in</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
