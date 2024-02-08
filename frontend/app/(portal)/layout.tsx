import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Gharpeti",
  description: "Find yourself a home",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="py-24">
        <Suspense>{children}</Suspense>
      </div>
    </>
  );
}
