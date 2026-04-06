import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
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
}

export const MovieFilters = ({ onChange }: Props) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input
        placeholder="Buscar filmes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select onValueChange={setGenre}>
        <SelectTrigger>
          <SelectValue placeholder="Gênero" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="28">Ação</SelectItem>
          <SelectItem value="35">Comédia</SelectItem>
          <SelectItem value="18">Drama</SelectItem>
          <SelectItem value="27">Terror</SelectItem>
          <SelectItem value="10749">Romance</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={setYear}>
        <SelectTrigger>
          <SelectValue placeholder="Ano" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
          <SelectItem value="2021">2021</SelectItem>
          <SelectItem value="2020">2020</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={setRating}>
        <SelectTrigger>
          <SelectValue placeholder="Rating" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="7">7+</SelectItem>
          <SelectItem value="8">8+</SelectItem>
          <SelectItem value="9">9+</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
