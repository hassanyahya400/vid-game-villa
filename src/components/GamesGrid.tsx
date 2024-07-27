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
import InfiniteScroll from "react-infinite-scroll-component";

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
  const fetchedGamesCount =
    data?.pages.reduce((total, game) => (total += game.results.length), 0) || 0;

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<p>Loading more games...</p>}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing="6"
          padding="10px"
        >
          {isLoading
            ? skeleton.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : data?.pages.map((page, idx) => (
                <Fragment>
                  {page?.results.map((game, idx) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GamesGrid;
