import { SimpleGrid, Text, useStatStyles } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding="5">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;