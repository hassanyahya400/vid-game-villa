import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { genres } from "../data/genres";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";

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
    staleTime: ms("24h"),
  });
};

export default useGenre;
