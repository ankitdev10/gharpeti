import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Gharpeti",
  description: "Find yourself a home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        <div className="py-24">{children}</div>
      </body>
    </html>
  );
}
