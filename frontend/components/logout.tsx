"use client";
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const Logout = () => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      className="p-2"
      onClick={() => {
        logout();
        router.refresh();
      }}
    >
      Logout
    </Button>
  );
};
