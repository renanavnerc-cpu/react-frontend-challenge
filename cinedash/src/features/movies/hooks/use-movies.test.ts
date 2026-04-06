import { describe, it, expect, vi, beforeEach } from "vitest";
import { moviesService } from "../services/movies-service";
import type { MoviesResponse } from "../types/movie";

describe("moviesService", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    vi.clearAllMocks();
  });

  it("deve retornar a estrutura MoviesResponse ao buscar tendências", async () => {
    const mockMoviesResponse: MoviesResponse = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    };

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockMoviesResponse,
    } as unknown as Response);

    const response = await moviesService.getTrending({ page: 1 });
    expect(response.page).toBe(1);
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
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
