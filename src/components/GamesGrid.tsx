import { SimpleGrid, Text, useStatStyles } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlaform: Platform | null;
}

const GamesGrid = ({ selectedGenre, selectedPlaform }: Props) => {
  const { data, isLoading, error } = useGame(selectedGenre, selectedPlaform);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={5}
        padding="5"
      >
        {isLoading
          ? skeleton.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
