export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids: number[];
  backdrop_path: string | null;
  popularity: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  overview: string;
  backdrop_path: string | null;
  runtime: number;
  genres: { id: number; name: string }[];
  tagline: string;
  budget: number;
  revenue: number;
  // Dados vindo do append_to_response
  credits?: {
    cast: CastMember[];
  };
  videos?: {
    results: VideoResource[];
  };
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface VideoResource {
  key: string;
  site: string;
  type: string;
}
