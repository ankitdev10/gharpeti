import { Badge } from "@/components/ui/badge";
import Card from "@/components/universal/Card";

const Search = ({
  params,
}: {
  params: {
    [key: string]: string;
  };
}) => {
  return (
    <section className=" w-4/5 mx-auto">
      <h1 className="font-semibold text-2xl">Based on your search</h1>

      <div className="flex space-x-2 p-2">
        <Badge variant="outline" className="hover:scale-105 cursor-pointer">
          Flat
        </Badge>
        <Badge variant="outline" className="hover:scale-105 cursor-pointer">
          3 rooms
        </Badge>
        <Badge variant="outline" className="hover:scale-105 cursor-pointer">
          Kathmandu
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-12 pt-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}></Card>
        ))}
      </div>
    </section>
  );
};

export default Search;
