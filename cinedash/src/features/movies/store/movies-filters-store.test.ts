import { beforeEach, describe, expect, it } from "vitest";
import { useMoviesFiltersStore } from "./movies-filters-store";

describe("Movies Filters Store", () => {
  beforeEach(() => {
    useMoviesFiltersStore.getState().clearFilters();
  });

  it("deve iniciar sem filtros", () => {
    const state = useMoviesFiltersStore.getState();

    expect(state.filters).toEqual({});
  });

  it("deve salvar filtros corretamente", () => {
    const { setFilters } = useMoviesFiltersStore.getState();

    setFilters({
      search: "batman",
      genre: "28",
      year: "2024",
      rating: "8",
    });

    const state = useMoviesFiltersStore.getState();

    expect(state.filters).toEqual({
      search: "batman",
      genre: "28",
      year: "2024",
      rating: "8",
    });
  });

  it("deve limpar filtros corretamente", () => {
    const { setFilters, clearFilters } = useMoviesFiltersStore.getState();

    setFilters({
      search: "batman",
      genre: "28",
    });

    clearFilters();

    const state = useMoviesFiltersStore.getState();

    expect(state.filters).toEqual({});
  });
});
