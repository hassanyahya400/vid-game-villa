import { useQuery } from "@tanstack/react-query";
import { genres } from "../data/genres";
import apiClient from "../services/apiClient";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const genreService = createService<Genre>("/genres");
  // return { data: genres, isLoading: false, error: null };

  return useQuery<FetchDataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    // staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
