export interface ResponseInterface {
  data: DataResponse;
  status: number;
  statusText: string;
  headers: Headers;
  request: Request;
}

export interface DataResponse {
  page: number;
  results: ResultResponse[];
  total_pages: number;
  total_results: number;
}

export interface ResultResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
