import { useMemo, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useMovies } from "../hooks/use-movies";
import { MoviesList } from "../components/movies-list";
import { MoviesSkeleton } from "../components/movies-skeleton";
import { MovieFilters } from "../components/movie-filters";
import type { MoviesFilters } from "../types/filters";

export const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<MoviesFilters>({});

  const memoFilters = useMemo(() => filters, [filters]);

  const { data, isLoading, isError } = useMovies(page, memoFilters);

  const handleFiltersChange = useCallback((newFilters: MoviesFilters) => {
    setPage(1);
    setFilters(newFilters);
  }, []);

  if (isLoading) return <MoviesSkeleton />;

  if (isError)
    return <div className="text-center py-10">Erro ao carregar filmes</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">🎬 Trending Movies</h1>

      <MovieFilters onChange={handleFiltersChange} />

      <MoviesList movies={data?.results || []} />

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Anterior
        </Button>

        <span className="flex items-center">Página {page}</span>

        <Button variant="outline" onClick={() => setPage((prev) => prev + 1)}>
          Próxima
        </Button>
      </div>
    </div>
  );
};
