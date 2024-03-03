"use client";

import { activeCustomer, addProperty } from "@/lib/api";
import { useState } from "react";
import toast from "react-hot-toast";

export const CreateProperty = () => {
  const [data, setData] = useState<{
    title: string;
    description: string;
    rooms: number;
    price: number;
  }>({
    title: "",
    description: "",
    rooms: 0,
    price: 0,
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await activeCustomer();
      const addData = await addProperty({
        ...data,
        ownerId: user.ID,
        rooms: Number(data.rooms),
        price: Number(data.price),
      });
      if (addData) {
        toast.success("Property created successfully");
        setData({
          title: "",
          description: "",
          rooms: 0,
          price: 0,
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto my-8 space-y-4">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="A awesome flat"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-8">
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="rooms"
            className="block text-sm font-medium text-gray-600"
          >
            Rooms
          </label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-600"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          rows={4}
          className="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};
