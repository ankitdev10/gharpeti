import React from "react";
import { Button } from "../ui/button";

const Card = () => {
  return (
    <article className="bg-white shadow-xl relative">
      <img
        src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="hover:scale-[1.01] transition-all ease-linear"
      />

      <div className="p-2">
        <h1 className="text-lg capitalize font-semibold text-primary">
          Flat for rent in Chabahil
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          veritatis sit? Animi, ipsum! Consequuntur mollitia atque aperiam sit,
          natus vitae!
        </p>

        <h1 className="my-2 font-bold text-bold text-blue-900">
          Nrs 12,000 per month
        </h1>
        <Button className="mt-2 bg-primary hover:bg-primaryHover">
          Learn More
        </Button>
      </div>

      <h1 className="absolute top-2 left-2 text-sm px-5 py-1 bg-[#0492c2] text-white">
        Flat
      </h1>
      <h1 className="absolute right-2 top-2 text-sm px-5 py-1 bg-[#00308F] text-white">
        Chabahil
      </h1>
    </article>
  );
};

export default Card;
