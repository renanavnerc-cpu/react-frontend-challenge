import { useParams, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { moviesService } from "../services/movies-service";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Star, Clock, Calendar } from "lucide-react";
import { TMDB_IMAGE_URL } from "@/shared/config/tmdb";

export const MovieDetailsPage = () => {
  const { id } = useParams({ from: "/movie/$id" });
  const navigate = useNavigate();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => moviesService.getById(id),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="p-8 text-center animate-pulse">
        Carregando detalhes...
      </div>
    );
  if (isError || !movie)
    return <div className="p-8 text-center">Filme não encontrado.</div>;

  const trailer = movie.videos?.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube",
  );

  return (
    <main className="container mx-auto py-6 px-4 space-y-8 animate-in fade-in duration-500">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate({ to: "/dashboard" })}
        className="hover:bg-secondary transition-colors"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Voltar ao Dashboard
      </Button>

      <section className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10">
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-muted/20 bg-muted">
          <img
            src={
              movie.poster_path
                ? `${TMDB_IMAGE_URL}${movie.poster_path}`
                : "/placeholder-movie.png"
            }
            alt={movie.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-sm font-bold gap-1"
              >
                <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                {movie.vote_average.toFixed(1)}
              </Badge>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium">
                <Clock className="w-4 h-4" /> {movie.runtime} min
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium border-l pl-3">
                <Calendar className="w-4 h-4" />{" "}
                {movie.release_date.split("-")[0]}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <Badge
                key={genre.id}
                variant="outline"
                className="bg-primary/5 border-primary/20"
              >
                {genre.name}
              </Badge>
            ))}
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Sinopse</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {movie.overview || "Nenhuma sinopse disponível em português."}
            </p>
          </div>

          {movie.credits?.cast && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Elenco Principal</h2>
              <div className="flex flex-wrap gap-4">
                {movie.credits.cast.slice(0, 5).map((actor) => (
                  <div key={actor.id} className="text-center w-20">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 bg-muted border">
                      <img
                        src={
                          actor.profile_path
                            ? `${TMDB_IMAGE_URL}${actor.profile_path}`
                            : "/avatar-fallback.png"
                        }
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] font-bold truncate">
                      {actor.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {actor.character}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {trailer && (
        <section className="space-y-4 pt-8 border-t">
          <h2 className="text-2xl font-bold">Trailer Oficial</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={`${movie.title} - Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}
    </main>
  );
};
