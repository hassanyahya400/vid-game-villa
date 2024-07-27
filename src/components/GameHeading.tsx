import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useFindGenre(gameQuery.genreId);
  const selectedPlatform = useFindPlatform(gameQuery.platformId);

  const heading = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;

  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
