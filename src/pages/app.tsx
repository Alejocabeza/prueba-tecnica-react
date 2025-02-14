import { CardMovie } from "@/components/card-movie";
import { FiltersMovies } from "@/components/filters-movie";
import { SearchMovie } from "@/components/search-movie";
import { useMovies } from "@/hooks/useMovies";

function App() {
  const [movies, setSearch] = useMovies();

  return (
    <section className="flex flex-col justify-center items-center w-screen !my-4 gap-8">
      <header className="flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-3xl font-bold">FlickFinder</h1>
        <SearchMovie setSearch={setSearch} />
        <FiltersMovies />
      </header>
      <main className="grid grid-cols-3 gap-5">
        {movies && Array.isArray(movies) && movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
        {movies && !Array.isArray(movies) && <CardMovie movie={movies} />}
      </main>
    </section>
  );
}

export default App;
