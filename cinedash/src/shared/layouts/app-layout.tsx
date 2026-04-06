import type { ReactNode } from "react";
import { Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <span className="text-lg font-semibold tracking-wide">
              CineDash
            </span>

            <nav aria-label="Navegação principal">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium transition hover:bg-muted/80"
              >
                <Home className="h-4 w-4" />
                Início
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};
