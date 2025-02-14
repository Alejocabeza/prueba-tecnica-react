import React, { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { MovieInterface } from "@/interfaces/movies";

interface MovieCardInterface {
  movie: MovieInterface;
}

export const CardMovie: FC<MovieCardInterface> = ({ movie }) => {
  return (
    <Card className="w-[20rem] min-h-[20rem] overflow-hidden !p-4">
      <CardHeader className="flex flex-col gap-4">
        <img src={movie.poster_path} alt={movie.title} className="aspect-square" />
        <h1 className="text-2xl font-bold">{movie.title}</h1>
      </CardHeader>
      <CardContent className="!mt-2">
        <p className="text-left text-balance truncate whitespace-break-spaces text-sm">
          {movie.overview.length > 100 ? movie.overview.substring(0, 150) + '...' : movie.overview}
          {movie.overview.length > 100 && <a href={`/movie/${movie.id}`} className="text-blue-500 font-bold"> Leer más</a>}
        </p>
      </CardContent>
    </Card>
  );
};
