import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import Promotion from "@/components/home/Promotion";

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url("/assets/hero3.jpg")`,
        }}
        className=" flex justify-center items-center bg-no-repeat bg-cover bg-center h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-gray-600 before:opacity-60"
      >
        <Hero />
      </div>
      <FeaturedProperties />
      <Promotion />
    </main>
  );
}
