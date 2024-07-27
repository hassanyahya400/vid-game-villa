import { useQuery } from "@tanstack/react-query";
import { genres } from "../data/genres";
import createService from "../services/restService";
import { FetchDataResponse } from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const genreService = createService<Genre>("/genres");

  return useQuery<FetchDataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGenre;
