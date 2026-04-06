import { TMDB_API_KEY, TMDB_BASE_URL } from "@/shared/config/tmdb";
import type { MoviesResponse } from "../types/movie";
import type { MoviesFilters } from "../types/filters";

interface Params extends MoviesFilters {
  page?: number;
}

export const moviesService = {
  getTrending: async (params: Params): Promise<MoviesResponse> => {
    const hasSearch = !!params.search;

    const endpoint = hasSearch ? "/search/movie" : "/discover/movie";

    const url = new URL(`${TMDB_BASE_URL}${endpoint}`);

    url.searchParams.append("api_key", TMDB_API_KEY);
    url.searchParams.append("page", String(params.page || 1));

    if (hasSearch && params.search) {
      url.searchParams.append("query", params.search);
    }

    if (!hasSearch && params.genre) {
      url.searchParams.append("with_genres", params.genre);
    }

    if (!hasSearch && params.year) {
      url.searchParams.append("primary_release_year", params.year);
    }

    if (!hasSearch && params.rating) {
      url.searchParams.append("vote_average.gte", params.rating);
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error("Erro ao buscar filmes");
    }

    return response.json();
  },
};
