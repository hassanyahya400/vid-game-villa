import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { genres } from "../data/genres";
import Genre from "../models/Genre";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";

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
