import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../App";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";
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
  const gameService = () => createService<Game>("/games");

  return useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: [gameQuery, "games"],
    queryFn: ({ pageParam = 1 }) =>
      gameService().getAll({
        params: {
          genres: gameQuery.genreId,
          parents_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
  });
};

export default useGame;
