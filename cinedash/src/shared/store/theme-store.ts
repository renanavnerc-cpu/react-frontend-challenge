import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeType = "light" | "dark";

interface ThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  hasHydrated: boolean;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      hasHydrated: false,

      setTheme: (theme: ThemeType) => {
        set({ theme });
        document.documentElement.classList.toggle("dark", theme === "dark");
      },

      onRehydrateStorage: () => (state: ThemeState | null) => {
        set({ hasHydrated: true });
        if (state?.theme) {
          document.documentElement.classList.toggle(
            "dark",
            state.theme === "dark",
          );
        }
      },
    }),
    { name: "theme-storage" },
  ),
);
