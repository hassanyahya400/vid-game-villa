import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../models/Game";
import createService from "../services/restService";

const useGame = (slug: string) => {
  const gameService = () => createService<Game>("/games");

  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => gameService().getOne(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
