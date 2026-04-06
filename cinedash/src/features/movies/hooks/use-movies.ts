import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { moviesService } from "../services/movies-service";
import type { MoviesFilters } from "../types/filters";
import type { MoviesResponse } from "../types/movie";

export const useMovies = (page: number, filters?: MoviesFilters) => {
  return useQuery<MoviesResponse>({
    queryKey: ["movies", page, JSON.stringify(filters)],
    queryFn: () =>
      moviesService.getTrending({
        page,
        ...filters,
      }),
    placeholderData: keepPreviousData,
  });
};
