import { Box, Button, SimpleGrid, Text, useStatStyles } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hooks/usePlatform";
import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <Box padding="5">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="6">
          {isLoading
            ? skeleton.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : data?.pages.map((page, idx) => (
                <Fragment key={idx}>
                  {page?.results.map((game, idx) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </Fragment>
              ))}
        </SimpleGrid>
        {hasNextPage && (
          <Button my="5" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load more games"}
          </Button>
        )}
      </Box>
    </>
  );
};

export default GamesGrid;
