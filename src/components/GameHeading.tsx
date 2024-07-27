import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre().data?.results.find(
    (genre) => genre.id == gameQuery.genreId,
  );
  const selectedPlatform = usePlatform().data?.results.find(
    (platform) => platform.id == gameQuery.platformId,
  );

  const heading = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;

  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
