import ExploreProperties from "@/components/home/ExploreProperties";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import Promotion from "@/components/home/Promotion";
import { axiosInstance } from "@/lib/axios";

const getUsers = async () => {
  try {
    const res = await axiosInstance.get("/users", {});
    console.log({ res });
    return res.data;
  } catch (err) {
    return err;
  }
};
export default async function Home() {
  const data = (await getUsers()) || null;

  if (data.code === "ECONNREFUSED") {
    return (
      <h1 className="text-6xl grid place-items-center min-h-screen">
        Server down
      </h1>
    );
  }

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
      <ExploreProperties />
    </main>
  );
}
