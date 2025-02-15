import { dataMovies } from "@/db/movies";
import { MovieInterface } from "@/interfaces/movies";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useApiFindAllMovies } from "./useAxios";

export const useFindAllMovies = (
  initialSearch = ""
): [
  MovieInterface[] | undefined,
  Dispatch<SetStateAction<string>>,
  Dispatch<SetStateAction<{ [key: string]: string }>>
] => {
  const [search, setSearch] = useState<string>(initialSearch);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [movies, setMovies] = useState<MovieInterface[] | undefined>([]);
  const { data, isLoading, error } = useApiFindAllMovies();

  const searchedMovies = useMemo(
    () =>
      search
        ? dataMovies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
        : dataMovies,
    [search]
  );

  const filteredMovies = useMemo(() => {
    if (filters) {
      if (filters.filter_by_date) {
        return dataMovies.filter((movie) => {
          const movieDate = new Date(movie.release_date);
          const filterDate = new Date(filters.filter_by_date);
          filterDate.setFullYear(filterDate.getFullYear() + 1);
          return movieDate.getFullYear() === filterDate.getFullYear();
        });
      }
      if (filters.filter_by_rating) {
        return dataMovies.filter((movie) => {
          const rating = parseFloat(filters.filter_by_rating);
          return (
            movie.vote_average >= rating && movie.vote_average < rating + 1
          );
        });
      }
    }
    return dataMovies;
  }, [filters]);

  useEffect(() => {
    setMovies(searchedMovies);
  }, [searchedMovies]);

  useEffect(() => {
    setMovies(filteredMovies);
  }, [filteredMovies]);

  useEffect(() => {}, []);

  return [movies, setSearch, setFilters];
};

export const useFindOneMovie = (id: string): MovieInterface => {
  return dataMovies.filter((movie) => movie.id === Number(id))[0];
};
