import { axiosInstance } from "./axios";

interface SearchParams {
  rooms?: number;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
}

export const search = async ({ data }: { data: SearchParams }) => {
  try {
    const res = await axiosInstance.get("/property/search", {
      data,
    });
    return res;
  } catch (error) {}
};
