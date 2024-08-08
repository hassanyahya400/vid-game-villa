import { useQuery } from "@tanstack/react-query";
import Screenshot from "../models/Screenshot";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";

const useGameScreenshots = (gameSlug: string) => {
  const gameService = () =>
    createService<Screenshot>(`/games/${gameSlug}/screenshots`);

  return useQuery<FetchDataResponse<Screenshot>, Error>({
    queryKey: ["games", gameSlug, "screenshots"],
    queryFn: () => gameService().getAll(),
  });
};

export default useGameScreenshots;
