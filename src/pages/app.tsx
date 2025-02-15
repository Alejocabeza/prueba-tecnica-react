import { CardMovie } from "@/components/card-movie";
import { SearchMovie } from "@/components/search-movie";
import {
  useMoviesWithPagination,
  useSearchMovies,
} from "@/hooks/useMovies";
import { ResultResponse } from "@/interfaces/response";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const {
    movies: allMovies,
    isLoading: isLoadingAllMovies,
  } = useMoviesWithPagination(page);
  const {
    movies: searchMovies,
    isLoading: isLoadingSearch,
  } = useSearchMovies(search, page);
  const [movies, setMovies] = useState<ResultResponse[] | undefined>(allMovies);
  const isLoading = isLoadingAllMovies || isLoadingSearch;

  useEffect(() => {
    if (search) {
      setMovies(searchMovies);
    } else {
      setMovies(allMovies);
    }
  }, [allMovies, searchMovies, search]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 800 &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, setPage]);

  return (
    <section className="flex flex-col justify-center items-center w-screen !my-4 gap-12">
      <header className="flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-3xl font-bold">FlickFinder</h1>
        <SearchMovie setSearch={setSearch} />
      </header>
      {isLoading && movies?.length === 0 ? (
        <span className="col-span-full flex justify-center items-center">
          <Loader className="w-10 h-10 animate-spin" />
        </span>
      ) : (
        <main className="grid grid-cols-3 gap-5">
          {movies &&
            Array.isArray(movies) &&
            movies.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
        </main>
      )}
      {isLoading && movies?.length > 0 && (
        <span className="col-span-full flex justify-center items-center">
          <Loader className="w-10 h-10 animate-spin" />
        </span>
      )}
      {!isLoading && movies?.length === 0 && (
        <div className="col-span-full flex flex-col justify-center items-center bg-white dark:bg-gray-900 p-4">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 14H6.526a2 2 0 01-1.789-2.894l3.5-7A2 2 0 0110 6.526zM6 12a6 6 0 0112 0v2a2 2 0 11-2 0v-2zm0-6a6 6 0 0112 0v2a2 2 0 11-2 0v-2z"
            />
          </svg>
          <p className="mt-2 text-lg font-semibold">No movies found</p>
        </div>
      )}
    </section>
  );
}

export default App;