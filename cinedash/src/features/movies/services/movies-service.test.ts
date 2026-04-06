import { describe, it, expect, beforeEach, vi } from "vitest";
import { moviesService } from "./movies-service";
import type { MoviesResponse } from "../types/movie";

const fetchMock = vi.fn();
vi.stubGlobal("fetch", fetchMock);

describe("moviesService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve retornar a estrutura MoviesResponse ao buscar tendências", async () => {
    const mockMoviesResponse: MoviesResponse = {
      page: 1,
      results: [
        {
          id: 1,
          title: "Filme Teste",
          original_title: "Test Movie",
          poster_path: null,
          vote_average: 8,
          release_date: "2024",
          overview: "Sinopse",
          genre_ids: [],
          backdrop_path: null,
          popularity: 10,
        },
      ],
      total_pages: 1,
      total_results: 1,
    };

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockMoviesResponse,
    } as unknown as Response);

    const response = await moviesService.getTrending({ page: 1 });

    expect(response.page).toBe(1);
    expect(response.results[0].title).toBe("Filme Teste");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("deve tratar erro 404 no getById", async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({}),
    } as unknown as Response);

    await expect(moviesService.getById("999")).rejects.toThrow(
      "Filme não encontrado",
    );
  });
});
