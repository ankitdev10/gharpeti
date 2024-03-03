import { Button } from "@/components/ui/button";
import Card from "@/components/universal/Card";
import { search } from "@/lib/properties";
import Link from "next/link";

const Search = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) => {
  const data = await search({
    data: {
      location: searchParams.location,
      rooms: parseInt(searchParams.rooms),
      minPrice: parseInt(searchParams.minPrice),
      maxPrice: parseInt(searchParams.maxPrice),
    },
  });

  const hehe = Object.assign({}, searchParams);
  const badges = Object.keys(searchParams).map((item) => {
    if (item === "minPrice" || "maxPrice") return "price";
    return item;
  });
  return (
    <section className=" w-4/5 mx-auto">
      <h1 className="font-semibold text-2xl">Based on your search</h1>

      {/* <div className="flex space-x-2 p-2">
        {badges.map((item, i) => (
          <Badge
            key={i}
            variant="outline"
            className="hover:scale-105 cursor-pointer"
          >
            {item}
          </Badge>
        ))}
      </div> */}

      <div className="grid grid-cols-3 gap-x-8 gap-y-12 pt-12 ">
        {data!.data.length > 0 ? (
          data!.data.map((item: any, i: number) => (
            <Card item={item} key={i}></Card>
          ))
        ) : (
          <h1 className="text-lg ">
            No properties found matching your search
            <Link href={"/"}>
              <Button className="mt-2">Go Home</Button>
            </Link>
          </h1>
        )}
      </div>
    </section>
  );
};

export default Search;
