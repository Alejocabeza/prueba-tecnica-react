import { CardMovie } from "@/components/card-movie";
import { movies } from "@/db/movies";

function App() {
  return (
    <section className="flex flex-col justify-center items-center w-screen !my-4 gap-8">
      <header className="flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-3xl font-bold">FlickFinder</h1>
        <form className="flex justify-center items-center gap-2" onSubmit={(e) => { e.preventDefault(); alert('buscado') }}>
          <input placeholder="Search for a movie" className="border border-gray-300 rounded-md !px-2 !py-1 !w-[20rem]" />
          <button className="bg-primary rounded !py-1 text-primary-foreground !px-2 cursor-pointer" type="submit">Search</button>
        </form>
      </header>
      <main className="grid grid-cols-3 gap-5">
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </main>
    </section>
  );
}

export default App;
