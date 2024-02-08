import React from "react";

const ExploreProperties = () => {
  const dummy = ["Villa", "Apartment", "Flat", "Cottage", "Banglo"];
  return (
    <section className="container mt-16">
      <div>
        <h1 className="font-bold tracking-wider text-4xl text-center">
          Explore Properties
        </h1>
        <h5 className="text-center text-gray-400 text-sm font-semibold">
          We offer diverse range of propeties
        </h5>
      </div>

      <div className="py-12 grid grid-cols-5 gap-12 place-items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            className="relative cursor-pointer before:transition-all before:ease-linear before:duration-200 delay-300 before:absolute before:inset-0 before:w-full before:h-full before:content-[''] before:bg-black/40 hover:before:bg-black/20"
            key={i}
          >
            <img
              src="https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[300px] bg-black object-cover"
            />
            <h1 className="absolute inset-0 z-40 text-2xl text-white font-bold grid place-content-center">
              {dummy[i]}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProperties;
