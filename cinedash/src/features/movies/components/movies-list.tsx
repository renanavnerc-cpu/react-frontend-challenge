import { MovieCard } from "./movie-card";
import type { Movie } from "../types/movie";

interface Props {
  movies: Movie[];
}

export const MoviesList = ({ movies }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
