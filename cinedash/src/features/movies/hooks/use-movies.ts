import { useQuery } from "@tanstack/react-query";
import { moviesService } from "../services/movies-service";

export const useMovies = (page: number) => {
  return useQuery({
    queryKey: ["movies", page],
    queryFn: () => moviesService.getTrending({ page }),
  });
};
