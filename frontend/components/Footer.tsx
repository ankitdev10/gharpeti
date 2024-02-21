import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 p-8">
      <div className="grid grid-cols-3 w-4/5 mx-auto  gap-x-24">
        <div>
          <Link href={"/"}>
            <img
              src={"assets/logos/logo-no-background.svg"}
              alt=""
              className="w-32"
            />
          </Link>

          <p className="mt-4 opacity-80 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vero
            rerum obcaecati odio quod aspernatur minima tempora animi aperiam
            omnis, natus corrupti id veniam temporibus quasi eos nam facere
            eveniet iure sunt fugiat blanditiis? Numquam nihil eos praesentium.
          </p>
        </div>
        <div className="grid  justify-center">
          <div>
            <h1 className="text-lg font-bold text-primary">Company</h1>
            <ul className="mt-4 flex flex-col space-y-2">
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li>
                <Link href={"/properties"}>Properties</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid justify-center">
          <div>
            <h1 className="text-primary text-lg font-bold">Contact Us</h1>

            <ul className="flex flex-col space-y-4 mt-4">
              <li className="flex space-x-2 items-center">
                <PhoneIcon size={20} />
                <span>98127981721</span>
              </li>

              <li className="flex space-x-2 items-center">
                <MailIcon size={20} />
                <span>hi@gharpeti.com</span>
              </li>

              <li className="flex space-x-2 items-center">
                <LocateIcon size={20} />
                <span>Kathmandu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
