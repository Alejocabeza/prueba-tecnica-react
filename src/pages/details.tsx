import { useFindOneMovie } from "@/hooks/useMovies"
import { Loader, StarIcon } from "lucide-react"
import { FC } from "react"

interface DetailsProps {
    params: { [key: string]: string }
}

const Details: FC<DetailsProps> = ({ params }) => {
    const { movie, isLoading } = useFindOneMovie(params.id)

    return (
        <section className="flex flex-col justify-center items-center w-screen !my-4 gap-12">
            <header className="flex flex-col justify-center items-center gap-4 w-full">
                <a href="/">
                    <h1 className="text-3xl font-bold">FlickFinder</h1>
                </a>
            </header>
            {isLoading ? (
                <span className="col-span-full flex justify-center items-center"><Loader className="w-10 h-10 animate-spin" /></span>
            ) : (
                <main className="grid grid-cols-2 w-full gap-6 items-start">
                    <div className="w-full overflow-hidden flex justify-end">
                        <img src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path} alt={movie?.title} className="w-10/12 h-10/12 rounded-lg" />
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-start gap-4">
                        <h2 className="text-4xl font-bold">{movie?.title}</h2>
                        <p className="text-lg"><strong>Overview:</strong> {movie?.overview}</p>
                        <span className="flex items-center gap-1 text-lg"><strong>Release Date:</strong> {movie?.release_date}</span>
                        <span className="flex items-center gap-1 text-lg"><strong>Vote Average:</strong> {movie?.vote_average.toFixed(1)}<StarIcon className="w-4 h-4" /></span>
                        <span className="flex items-center gap-1 text-lg"><strong>Original Language:</strong> {movie?.original_language}</span>
                        <span className='flex items-center gap-1 text-lg'><strong>Original Title:</strong> {movie?.original_title}</span>
                        {
                            movie?.genres && movie.genres.length > 0 && (
                                <span className="flex items-center gap-1 text-lg"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</span>
                            )
                        }
                        <span className="flex items-center gap-1 text-lg">
                            <strong>Runtime:</strong>
                            {movie?.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A'}
                        </span>
                    </div>
                </main>
            )}
        </section>
    )
}

export default Details
