import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TMDB_IMAGE_URL } from "@/shared/config/tmdb";
import { Clapperboard } from "lucide-react";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const [imgError, setImgError] = useState(false);
  const hasImage = movie.poster_path && !imgError;
  const imageUrl = `${TMDB_IMAGE_URL}${movie.poster_path}`;

  return (
    <Link
      to="/movie/$id"
      params={{ id: movie.id.toString() }}
      className="block no-underline group"
    >
      <Card className="overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-primary/10 border-muted/50 cursor-pointer">
        <div className="relative w-full h-80 bg-muted/30 overflow-hidden">
          {hasImage ? (
            <img
              src={imageUrl}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-4 text-muted-foreground bg-secondary/20">
              <Clapperboard
                className="w-12 h-12 opacity-20"
                strokeWidth={1.5}
              />
              <span className="text-xs text-center font-medium opacity-60 px-2">
                {movie.title}
              </span>
            </div>
          )}

          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge className="bg-black/60 backdrop-blur-md border-none text-white">
              ⭐ {movie.vote_average.toFixed(1)}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 h-10 group-hover:text-primary transition-colors">
            {movie.title || movie.original_title}
          </h3>

          <div className="flex justify-between items-center pt-3 border-t border-muted/40">
            <Badge
              variant="outline"
              className="font-mono text-xs px-2.5 py-0.5 border-muted-foreground/30 bg-muted/50"
            >
              <span className="opacity-60 mr-1">TMDb</span>
              <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
            </Badge>

            <span className="text-sm font-semibold text-muted-foreground/80">
              {movie.release_date?.split("-")[0] || "N/A"}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
