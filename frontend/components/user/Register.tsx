"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FormEventHandler, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
type UserType = "customer" | "seller";

const Register = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();
  const [type, setType] = useState<UserType | null>(null);
  const [data, setData] = useState<any>();

  const FORM_FIELDS: Record<
    UserType,
    { placeholder: string; type: string; name: string }[]
  > = {
    customer: [
      {
        placeholder: "First Name",
        type: "text",
        name: "firstName",
      },
      {
        placeholder: "Last Name",
        type: "text",
        name: "lastName",
      },
      {
        placeholder: "Email",
        type: "email",
        name: "email",
      },
      {
        placeholder: "Phone number",
        type: "text",
        name: "contact",
      },
      {
        placeholder: "Password",
        type: "password",
        name: "password",
      },
    ],
    seller: [
      {
        placeholder: "First Name",
        type: "text",
        name: "firstName",
      },
      {
        placeholder: "Last Name",
        type: "text",
        name: "lastName",
      },
      {
        placeholder: "Email",
        type: "email",
        name: "email",
      },
      {
        placeholder: "Phone number",
        type: "text",
        name: "contact",
      },
      {
        placeholder: "Password",
        type: "password",
        name: "password",
      },
      {
        placeholder: "Location of the house",
        type: "text",
        name: "location",
      },
    ],
  };

  const handleRegisterType = (value: UserType) => {
    params.set("type", value);
    router.push(pathname + `?${params.toString()}`);
    setType(value);
    fetch("", {
      headers: {},
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log({ name });
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log({ data });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/users/create", {
      ...data,
      role: type,
    });
    console.log({ res });
    if (res.status === 200 || 201) router.push("/user?q=signin");
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {!type ? (
        <>
          <h1 className="text-4xl mb-4">We want to know more about you</h1>

          <Button
            className="bg-primary hover:bg-primaryHover w-4/5 py-3 text-lg h-auto"
            onClick={() => handleRegisterType("customer")}
            value={"customer"}
          >
            I am looking for a house
          </Button>
          <Button
            className="bg-primary hover:bg-primaryHover w-4/5 py-3 text-lg h-auto"
            onClick={() => handleRegisterType("seller")}
            value={"seller"}
          >
            I am renting a place
          </Button>
        </>
      ) : (
        <form action="" className="flex flex-col items-center space-y-2">
          {type === "customer" ? (
            <h1 className="text-4xl mb-4">Find yourself a home</h1>
          ) : (
            <h1 className="text-4xl mb-4">Find your house partner</h1>
          )}
          {FORM_FIELDS[type].map((field) => (
            <Input
              key={field.placeholder}
              placeholder={field.placeholder}
              type={field.type}
              name={field.name}
              onChange={handleChange}
            />
          ))}

          <Button
            className=" bg-primary hover:bg-primaryHover w-4/5 py-3 text-lg h-auto"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </form>
      )}
    </div>
  );
};

export default Register;
