import { useThemeStore } from "../store/theme-store";

export function ThemeSync() {
  useThemeStore((state) => state.hasHydrated);
  return null;
}
