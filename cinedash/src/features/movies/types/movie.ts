export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids: number[];
  backdrop_path: string;
  popularity: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
