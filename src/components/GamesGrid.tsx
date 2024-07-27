import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

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
        loader={<Spinner mx="45%" size="lg"/>}
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
                <Fragment key={idx}>
                  {page?.results.map((game) => (
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
