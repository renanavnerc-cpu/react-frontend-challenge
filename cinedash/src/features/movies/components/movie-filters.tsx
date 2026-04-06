import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useDebounce } from "@/shared/hooks/use-debounce";
import type { MoviesFilters } from "../types/filters";

interface Props {
  onChange: (filters: MoviesFilters) => void;
  initialFilters?: MoviesFilters;
}

export const MovieFilters = ({ onChange, initialFilters }: Props) => {
  const [search, setSearch] = useState(initialFilters?.search ?? "");
  const [isSearchOpen, setIsSearchOpen] = useState(
    Boolean(initialFilters?.search),
  );
  const [genre, setGenre] = useState(initialFilters?.genre ?? "");
  const [year, setYear] = useState(initialFilters?.year ?? "");
  const [rating, setRating] = useState(initialFilters?.rating ?? "");

  const debouncedSearch = useDebounce(search, 500);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    onChange({
      search: debouncedSearch,
      genre,
      year,
      rating,
    });
  }, [debouncedSearch, genre, year, rating, onChange]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 rounded-full border bg-background px-2 py-1">
          <button
            type="button"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="rounded-full p-2 transition hover:bg-accent"
            aria-label="Abrir busca"
            aria-expanded={isSearchOpen}
          >
            <Search className="h-4 w-4" />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <Input
              placeholder="Pesquisar em CineDash"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 border-none bg-transparent focus-visible:ring-0"
            />
          </div>
        </div>

      <div className="flex min-w-[200px] items-center gap-2 md:min-w-[220px]">
        <label
          htmlFor="movie-filter-genre"
          className="shrink-0 text-xs text-muted-foreground"
        >
          Gênero
        </label>
        <Select
          value={genre || "all"}
          onValueChange={(value) => setGenre(value === "all" ? "" : value)}
        >
          <SelectTrigger id="movie-filter-genre" className="min-w-0 w-full flex-1">
            <SelectValue placeholder="Gênero" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="28">Ação</SelectItem>
            <SelectItem value="35">Comédia</SelectItem>
            <SelectItem value="18">Drama</SelectItem>
            <SelectItem value="27">Terror</SelectItem>
            <SelectItem value="10749">Romance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex min-w-[180px] items-center gap-2 md:min-w-[200px]">
        <label
          htmlFor="movie-filter-year"
          className="shrink-0 text-xs text-muted-foreground"
        >
          Ano
        </label>
        <Select
          value={year || "all"}
          onValueChange={(value) => setYear(value === "all" ? "" : value)}
        >
          <SelectTrigger id="movie-filter-year" className="min-w-0 w-full flex-1">
            <SelectValue placeholder="Ano" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex min-w-[190px] items-center gap-2 md:min-w-[210px]">
        <label
          htmlFor="movie-filter-rating"
          className="shrink-0 text-xs text-muted-foreground"
        >
          Rating
        </label>
        <Select
          value={rating || "all"}
          onValueChange={(value) => setRating(value === "all" ? "" : value)}
        >
          <SelectTrigger id="movie-filter-rating" className="min-w-0 w-full flex-1">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="7">7+</SelectItem>
            <SelectItem value="8">8+</SelectItem>
            <SelectItem value="9">9+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
