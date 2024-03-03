import Card from "@/components/universal/Card";

const page = () => {
  return (
    <section className="">
      <div className="flex space-x-12 p-12 items-center">
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/19986476/pexels-photo-19986476/free-photo-of-a-window-with-red-shutters-on-a-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex-1 bg-slate-100 p-4">
          <h1 className="text-center font-bold text-2xl">Vary Nice House</h1>
          <p className="mt-2 opacity-80 line-clamp-3">
            Welcome to our cozy 2 BHK home, nestled in the heart of Kathmandu.
            This charming rental property offers a perfect blend of comfort and
            convenience. Located in a prime area, our home is ideal for those
            seeking a peaceful and well-connected living space.
          </p>

          <ul className="flex flex-col space-y-4 mt-8">
            <li>
              <strong>2 BHK Home:</strong> Enjoy the spaciousness of a
              2-bedroom, 1 kitchen, and 1 living room setup, designed to provide
              a comfortable living experience.
            </li>
            <li>
              <strong>Prime Location:</strong> Situated in the heart of
              Kathmandu, our home offers easy access to key amenities, markets,
              and popular destinations, making it a convenient choice for
              residents.
            </li>
            <li>
              <strong>Cozy Atmosphere:</strong> Experience a warm and inviting
              ambiance as you step into our well-maintained home. Thoughtfully
              designed interiors create a cozy atmosphere for you to relax and
              unwind.
            </li>
            <li>
              <strong>Modern Facilities:</strong> Benefit from modern
              facilities, including a fully equipped kitchen, comfortable
              bedrooms, and a relaxing living area. Our home is designed to
              cater to your everyday needs.
            </li>
            <li>
              <strong>Peaceful Surroundings:</strong> Despite being centrally
              located, our rental property provides a peaceful retreat, allowing
              you to escape the hustle and bustle of the city.
            </li>
            <li>
              <strong>Secure Environment:</strong> Your safety is our priority.
              Our home is situated in a secure neighborhood, providing you with
              a sense of peace and security.
            </li>
          </ul>
        </div>
      </div>

      <section className=" mt-12 pt-6 ">
        <div className="container">
          <h1 className="font-bold tracking-wider text-4xl text-center">
            Similar Properties
          </h1>

          <div className="mt-8 grid grid-cols-3 gap-12">
            {Array.from({ length: 3 }, (_, i) => (
              <Card
                item={{
                  title: "Villa",
                  description: "Villa",
                  price: 10000,
                  location: "Test",
                }}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
