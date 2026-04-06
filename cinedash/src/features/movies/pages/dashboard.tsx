import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useMovies } from "../hooks/use-movies";
import { MoviesList } from "../components/movies-list";
import { MoviesSkeleton } from "../components/movies-skeleton";
import { MovieFilters } from "../components/movie-filters";
import type { MoviesFilters } from "../types/filters";
import { useMoviesFiltersStore } from "../store/movies-filters-store";

export const Dashboard = () => {
  const [page, setPage] = useState(1);
  const filters = useMoviesFiltersStore((state) => state.filters);
  const setFilters = useMoviesFiltersStore((state) => state.setFilters);
  const hasHydrated = useMoviesFiltersStore((state) => state.hasHydrated);

  const { data, isLoading, isError } = useMovies(page, filters);

  const handleFiltersChange = useCallback((newFilters: MoviesFilters) => {
    setPage(1);
    setFilters(newFilters);
  }, [setFilters]);

  if (!hasHydrated || isLoading) return <MoviesSkeleton />;

  if (isError)
    return <div className="text-center py-10">Erro ao carregar filmes</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">🎬 Trending Movies</h1>

      <MovieFilters onChange={handleFiltersChange} initialFilters={filters} />

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
