"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FormEventHandler, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type UserType = "customer" | "seller";

const Register = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();
  const [type, setType] = useState<UserType | null>(null);

  const FORM_FIELDS: Record<UserType, { placeholder: string; type: string }[]> =
    {
      customer: [
        {
          placeholder: "First Name",
          type: "text",
        },
        {
          placeholder: "Last Name",
          type: "text",
        },
        {
          placeholder: "Email",
          type: "email",
        },
        {
          placeholder: "Phone number",
          type: "text",
        },
        {
          placeholder: "Password",
          type: "password",
        },
      ],
      seller: [
        {
          placeholder: "First Name",
          type: "text",
        },
        {
          placeholder: "Last Name",
          type: "text",
        },
        {
          placeholder: "Email",
          type: "email",
        },
        {
          placeholder: "Phone number",
          type: "text",
        },
        {
          placeholder: "Password",
          type: "password",
        },
        {
          placeholder: "Location of the house",
          type: "text",
        },
      ],
    };

  const handleRegisterType = (value: UserType) => {
    params.set("type", value);
    router.push(pathname + `?${params.toString()}`);
    setType(value);
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
            />
          ))}

          <Button className=" bg-primary hover:bg-primaryHover w-4/5 py-3 text-lg h-auto">
            Register
          </Button>
        </form>
      )}
    </div>
  );
};

export default Register;
