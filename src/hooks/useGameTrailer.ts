import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { Trailer } from "../models/Trailer";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";

const useGameTrailer = (gameSlug: string) => {
  const gameService = () => createService<Trailer>(`/games/${gameSlug}/movies`);
  return useQuery<FetchDataResponse<Trailer>, Error>({
    queryKey: ["games", gameSlug, "movies"],
    queryFn: () => gameService().getAll(),
    staleTime: ms("24h"),
  });
};

export default useGameTrailer;
