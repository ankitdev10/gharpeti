"use client";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SELECTOPTIONS = [
  {
    title: "Number of rooms",
    placeholder: "Select number of rooms",
    options: ["One", "Two", "Three", "Four", "Five"],
  },
  {
    title: "Price Range (NRS)",
    placeholder: "Select price range",
    options: [
      "Less than 2000",
      "2000 - 4000",
      "4000 - 6000",
      "6000 - 8000",
      "8000 - 10000",
      "More than 10000",
    ],
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <h1 className="text-4xl font-bold text-white text-center">
        Find Your Perfect Home
      </h1>

      <div className="mt-4 text-black opacity-100 flex items-center space-x-10 bg-white p-6 rounded-sm shadow-lg">
        {SELECTOPTIONS.map((item, i) => (
          <div>
            <h1 className="text-sm">{item.title}</h1>
            <Select key={i} onValueChange={(e) => console.log(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={item.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {item.options.map((opt, i) => (
                  <SelectItem key={i} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        <div>
          <h1 className="text-sm">Location</h1>
          <Input className="text-sm" placeholder="Chabahil..." />
        </div>

        <div>
          <Button className="bg-primary hover:bg-primaryHover">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
