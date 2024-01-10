import React from "react";
import { Button } from "../ui/button";

const Promotion = () => {
  return (
    <section className="container mt-12 flex items-center bg-blue-200 py-6">
      <div className="flex-1">
        <h1 className="text-6xl font-bold text-blue-900">
          EVERYONE DESERVES TO FEEL AT HOME.
        </h1>
      </div>

      <div className="flex-1">
        <img
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </section>
  );
};

export default Promotion;
