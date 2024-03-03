"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SELECTOPTIONS = [
  {
    type: "rooms",
    title: "Number of rooms",
    placeholder: "Select number of rooms",
    options: [
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "3" },
      { value: "4", text: "4" },
      { value: "5", text: "5" },
    ],
  },
  {
    type: "price",
    title: "Price Range (NRS)",
    placeholder: "Select price range",
    options: [
      { value: "0-2000", text: "Less than 2000" },
      { value: "2000-4000", text: "2000 - 4000" },
      { value: "4000-6000", text: "4000 - 6000" },
      { value: "6000-8000", text: "6000 - 8000" },
      { value: "8000-10000", text: "8000 - 10000" },
      { value: "10000-more", text: "More than 10000" },
    ],
  },
];

const Hero = () => {
  const router = useRouter();
  const pathname = usePathname();
  const seachParams = useSearchParams();
  const params = new URLSearchParams(seachParams);

  const updateUrl = (type: string, value: string) => {
    if (type === "location") {
      params.set("location", value);
    }
    if (type === "rooms") {
      params.set("rooms", value);
    }
    if (type === "price") {
      const minPrice = value.split("-")[0];
      const maxPrice = value.split("-")[0];
      params.set("minPrice", minPrice);
      params.set("maxPrice", maxPrice);
    }

    router.push(pathname + `?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="relative">
      <h1 className="text-4xl font-bold text-white text-center">
        Find Your Perfect Home
      </h1>

      <div className="mt-4 text-black opacity-100 flex items-center space-x-10 bg-white p-6 rounded-sm shadow-lg">
        {SELECTOPTIONS.map((item, i) => (
          <div key={i}>
            <h1 className="text-sm">{item.title}</h1>
            <Select key={i} onValueChange={(e) => updateUrl(item.type, e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={item.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {item.options.map((opt, i) => (
                  <SelectItem key={i} value={opt.value}>
                    {opt.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        <div>
          <h1 className="text-sm">Location</h1>
          <Input
            className="text-sm"
            placeholder="Chabahil..."
            onChange={(e) => updateUrl("location", e.target.value)}
          />
        </div>

        <div>
          <Link
            href={{
              pathname: "search",
              search: seachParams.toString(),
            }}
          >
            <Button className="bg-primary hover:bg-primaryHover">Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
