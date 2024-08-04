import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../state-management/store";
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
  slug: string;
  description_raw?: string;
}

const useGame = (slug: string) => {
  const gameService = () => createService<Game>("/games");

  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => gameService().getOne(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
