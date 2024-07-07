import { genres } from "../data/genres";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
