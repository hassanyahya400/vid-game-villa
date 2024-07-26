import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchDataResponse } from "../services/apiClient";
import { Platform } from "./usePlatform";
import createService from "../services/restService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery) => {
  const gameService = createService<Game>("/games");

  return useQuery<FetchDataResponse<Game>, Error>({
    queryKey: [gameQuery, "games"],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parents_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1_000,
  });
};

export default useGame;
