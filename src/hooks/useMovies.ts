import { dataMovies } from "@/db/movies";
import { MovieInterface } from "@/interfaces/movies";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

export const useMovies = (
  initialSearch = ""
): [MovieInterface[] | undefined, Dispatch<SetStateAction<string>>] => {
  const [search, setSearch] = useState<string>(initialSearch);
  const [movies, setMovies] = useState<MovieInterface[] | undefined>(
    dataMovies
  );

  const filteredMovies = useMemo(
    () =>
      search
        ? dataMovies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
        : dataMovies,
    [search]
  );

  useEffect(() => {
    setMovies(filteredMovies);
  }, [filteredMovies]);

  return [movies, setSearch];
};
