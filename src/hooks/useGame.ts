import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchDataResponse } from "../services/apiClient";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FetchDataResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
      .then((res) => res.data);

  return useQuery<FetchDataResponse<Game>, Error>({
    queryKey: [gameQuery, "games"],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1_000,
  });
};

export default useGame;
