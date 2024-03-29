import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
        <Suspense>
          <Loader />
        </Suspense>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        {children}

        <Footer />
      </body>
    </html>
  );
}
