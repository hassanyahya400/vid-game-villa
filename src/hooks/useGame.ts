import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = (
  selectedGenre: Genre | null,
  selectedPlaform: Platform | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlaform?.id,
      },
    },
    [selectedGenre, selectedPlaform],
  );

export default useGame;
