import Card from "../universal/Card";

const FeaturedProperties = () => {
  return (
    <section className=" mt-12 pt-6 ">
      <div className="container">
        <h1 className="font-bold tracking-wider text-4xl text-center">
          Discover Our Featured Properties
        </h1>
        <p className="text-center text-gray-400 text-sm font-semibold">
          Some beautiful places for you and your family
        </p>

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
  );
};

export default FeaturedProperties;
