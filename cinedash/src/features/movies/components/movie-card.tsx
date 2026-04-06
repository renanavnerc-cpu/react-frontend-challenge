import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TMDB_IMAGE_URL } from "@/shared/config/tmdb";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <img
        src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
        alt={movie.original_title || movie.title}
        className="w-full h-80 object-cover"
      />

      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold line-clamp-2">
          {movie.original_title || movie.title}
        </h3>

        <div className="flex justify-between items-center">
          <Badge variant="secondary">⭐ {movie.vote_average.toFixed(1)}</Badge>

          <span className="text-sm text-muted-foreground">
            {movie.release_date?.split("-")[0]}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
