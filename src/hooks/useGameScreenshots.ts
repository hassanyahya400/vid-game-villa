import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { Trailer } from "../models/Trailer";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";
import { Screenshot } from "../models/Screenshot";

const useGameScreenshots = (gameSlug: string) => {
  const gameService = () =>
    createService<Screenshot>(`/games/${gameSlug}/screenshots`);

  return useQuery<FetchDataResponse<Screenshot>, Error>({
    queryKey: ["games", gameSlug, "screenshots"],
    queryFn: () => gameService().getAll(),
  });
};

export default useGameScreenshots;
