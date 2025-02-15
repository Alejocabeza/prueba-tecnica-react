import { Axios } from "@/lib/axios";

export const moviesService = {
  findAll: async () => {
    return await Axios.get("/3/movie/top_rated");
  },
};
