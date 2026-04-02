import { TMDB_API_KEY, TMDB_BASE_URL } from "@/shared/config/tmdb";
import type { MoviesResponse } from "../types/movie";

interface Params {
  page?: number;
}

export const moviesService = {
  getTrending: async (params: Params): Promise<MoviesResponse> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}&page=${params.page}`,
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar filmes");
    }

    return response.json();
  },
};
