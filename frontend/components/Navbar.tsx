import { activeCustomer } from "@/lib/api";
import Link from "next/link";
import { Logout } from "./logout";
import { CreateProperty } from "./properties/create-property";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = async () => {
  const user = await activeCustomer();
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

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none ring-0">
              Profile
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              {user?.role === "seller" && (
                <DropdownMenuItem asChild>
                  <Dialog>
                    <DialogTrigger className="p-2">
                      Add new property
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Fill in your property details</DialogTitle>
                        <DialogDescription>
                          <CreateProperty />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuItem>
              )}
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
