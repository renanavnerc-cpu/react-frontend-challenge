import { useAuthStore } from "@/features/auth/store/auth-store";
import { useThemeStore } from "../store/theme-store";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";

export function UserAvatarThemeMenu() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  const initial = (user?.email?.trim()?.[0]?.toUpperCase() ?? "U").toString();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-2 text-sm transition hover:bg-muted"
          aria-label="Abrir menu do usuário"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-semibold">
            {initial}
          </span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        className="z-50 min-w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
      >
        <DropdownMenu.Item
          onSelect={(e) => {
            e.preventDefault();
            setTheme("light");
          }}
          className="cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none transition hover:bg-muted flex justify-start"
        >
          Claro {theme === "light" ? "✓" : ""}
        </DropdownMenu.Item>

        <DropdownMenu.Item
          onSelect={(e) => {
            e.preventDefault();
            setTheme("dark");
          }}
          className="cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none transition hover:bg-muted flex justify-start"
        >
          Escuro {theme === "dark" ? "✓" : ""}
        </DropdownMenu.Item>

        {user && (
          <DropdownMenu.Item
            onSelect={(e) => {
              e.preventDefault();
              logout();
            }}
            className="cursor-pointer flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition hover:bg-red-500 hover:text-white justify-start"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
