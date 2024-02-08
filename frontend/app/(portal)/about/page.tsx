const RentalPage = () => {
  return (
    <section id="rental__hero" className=" overflow-hidden">
      <div id="rental__hero__wrapper" className="w-4/5 mx-auto nb:w-11/12">
        <div
          id="top_section"
          className="flex space-x-12 items-center mob:flex-col mob:space-x-0 mob:space-y-10 "
        >
          <div
            data-aos="fade-right"
            className="flex-[0.8] mob:order-2 mob:mt-1  aspect-square rounded-3xl mob:w-full"
          >
            <img
              src="https://images.pexels.com/photos/3369569/pexels-photo-3369569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>
          <div data-aos="fade-left" className="flex-[1]">
            <h2 className="text-3xl font-bold text-primary nb:text-2xl">
              Welcome to Gharpeti - Your Home Rental Hub
            </h2>
            <p className="mt-2 font-satoshi text-justify">
              Gharpeti is your dedicated home rental platform, connecting
              property owners with potential tenants and making the process of
              finding and renting a home convenient and efficient.
            </p>
            <p className="mt-2 font-satoshi text-justify">
              Whether you are a property owner looking to advertise your space
              or a seeker in search of the perfect home, Gharpeti is your go-to
              destination. We offer a diverse range of properties, from cozy
              apartments to spacious houses, ensuring there's something for
              everyone.
            </p>
          </div>
        </div>
        <div
          id="bottom_section"
          className="mt-24 flex space-x-12 mob:space-x-0 items-center mob:flex-col"
        >
          <div data-aos="fade-right" className="flex-[1] px-3">
            <h2 className="text-3xl font-bold text-primary nb:text-2xl">
              Why Choose Gharpeti?
            </h2>
            <ul className="mt-4 list-image-checked font-satoshi text-justify flex flex-col space-y-2">
              <li className="">
                <p>
                  <strong>Wide Property Selection:</strong> Explore a diverse
                  range of rental properties on Gharpeti, from apartments to
                  houses, tailored to meet your preferences.
                </p>
              </li>

              <li>
                <strong>User-Friendly Platform:</strong> Gharpeti's website is
                designed to provide a seamless and user-friendly experience,
                making it easy for property owners to showcase their homes and
                for seekers to find their next living space.
              </li>

              <li>
                <strong>Transparent Booking:</strong> Gharpeti ensures
                transparent and straightforward booking processes, fostering
                trust between property owners and seekers.
              </li>

              <li>
                <strong>Quality and Safety:</strong> Your safety and
                satisfaction are paramount on Gharpeti. We prioritize quality
                standards and continuously enhance our platform to provide a
                secure and reliable environment for all users.
              </li>

              <li>
                <strong>24/7 Customer Support:</strong> Gharpeti's dedicated
                support team is available around the clock to assist you. We're
                here to answer your queries, address concerns, and provide
                guidance throughout your rental journey.
              </li>

              <p className="mt-4">
                Gharpeti is not just a platform; it's a community where property
                owners and seekers come together. Join us, explore the
                possibilities, and find your perfect rental match.
              </p>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            className="flex-[0.8] mob:mt-2  aspect-square rounded-3xl bg-red-100"
          >
            <img
              src={
                "https://images.pexels.com/photos/15368263/pexels-photo-15368263/free-photo-of-the-word-why-made-with-cubes-with-letters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className="rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalPage;
