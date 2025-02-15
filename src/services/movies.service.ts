import { ResponseInterface } from "@/interfaces/response";
import { Axios } from "@/lib/axios";

export const moviesService = {
  findAll: async ({ page }: { page?: number }): Promise<ResponseInterface> => {
    return await Axios.get(`/3/movie/popular?page=${page}`);
  },
  findOne: async ({ id }: { id?: string }): Promise<ResponseInterface> => {
    return await Axios.get(`/3/movie/${id}`);
  },
  searchMovie: async ({
    search,
    page,
  }: {
    search?: string;
    page?: number;
  }): Promise<ResponseInterface> => {
    return await Axios.get(`/3/search/movie?query=${search}&page=${page}`);
  },
};
