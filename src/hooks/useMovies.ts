import { useEffect, useMemo, useState } from "react";
import {
  useApiFindAllMovies,
  useApiFindOneMovie,
  useApiSearchMovie,
} from "./useAxios";
import { ResultResponse } from "@/interfaces/response";

export const useMoviesWithPagination = (page: number) => {
  const { data, isLoading, error } = useApiFindAllMovies({ page });
  const [movies, setMovies] = useState<ResultResponse[] | undefined>([]);

  useEffect(() => {
    if (data?.results) {
      setMovies((prev) => {
        const existingIds = new Set(prev?.map((movie) => movie.id));
        const newMovies = data.results.filter(
          (movie) => !existingIds.has(movie.id)
        );
        return [...(prev || []), ...newMovies];
      });
    }
  }, [data]);

  return {
    movies,
    isLoading,
    error,
  };
};

export const useSearchMovies = (search: string, page: number) => {
  const { data, isLoading, error } = useApiSearchMovie({ search, page });
  const [movies, setMovies] = useState<ResultResponse[] | undefined>([]);

  useEffect(() => {
    if (data?.results) {
      setMovies((prev) => {
        const existingIds = new Set(prev?.map((movie) => movie.id));
        const newMovies = data.results.filter(
          (movie) => !existingIds.has(movie.id)
        );
        return [...(prev || []), ...newMovies];
      });
    }
  }, [data]);

  return {
    movies,
    isLoading,
    error,
  };
};

export const useFindOneMovie = (id: string) => {
  const [movie, setMovie] = useState<ResultResponse | undefined>(undefined);
  const { data, isLoading, error } = useApiFindOneMovie(id);

  useEffect(() => {
    if (data && error === null) {
      setMovie(data);
    }
  }, [data]);

  return { movie, isLoading, error };
};
