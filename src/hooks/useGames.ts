import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../models/Game";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";
import { GameQuery } from "../state-management/store";

const useGames = (gameQuery: GameQuery) => {
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

export default useGames;
