import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MoviesFilters } from "../types/filters";

interface MoviesFiltersState {
  filters: MoviesFilters;
  hasHydrated: boolean;
  setFilters: (filters: MoviesFilters) => void;
  clearFilters: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

export const useMoviesFiltersStore = create<MoviesFiltersState>()(
  persist(
    (set) => ({
      filters: {},
      hasHydrated: false,

      setFilters: (filters) => set({ filters }),

      clearFilters: () => set({ filters: {} }),

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "movies-filters-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
