import Link from "next/link";
import { Button } from "../ui/button";

const Card = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    price: number;
    location: string;
  };
}) => {
  return (
    <article className="bg-white shadow-xl relative">
      <img
        src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="hover:scale-[1.01] transition-all ease-linear"
      />

      <div className="p-2">
        <h1 className="text-lg capitalize font-semibold text-primary">
          {item.title}
        </h1>
        <p className="text-gray-500">{item.description}</p>

        <h1 className="my-2 font-bold text-bold text-blue-900">
          Nrs {item.price} per month
        </h1>
        <Link href={"/properties/test"}>
          <Button className="mt-2 bg-primary hover:bg-primaryHover">
            Learn More
          </Button>
        </Link>
      </div>

      <h1 className="absolute top-2 left-2 text-sm px-5 py-1 bg-[#0492c2] text-white">
        Flat
      </h1>
      <h1 className="absolute right-2 top-2 text-sm px-5 py-1 bg-[#00308F] text-white">
        {item.location}
      </h1>
    </article>
  );
};

export default Card;
