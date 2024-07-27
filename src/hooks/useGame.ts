import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchDataResponse } from "../services/apiClient";
import { Platform } from "./usePlatform";
import createService from "../services/restService";
import { getQueryParamValue } from "../helper/urlHelper";

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
    staleTime: 24 * 60 * 60 * 1_000,
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
