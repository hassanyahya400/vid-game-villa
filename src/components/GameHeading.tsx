import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../state-management/store";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import { FC } from "react";
import useGameQueryStore from "../state-management/store";

interface Props {}

const GameHeading: FC<Props> = ({}: Props) => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useFindPlatform(selectedPlatformId);

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useFindGenre(selectedGenreId);

  const heading = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;

  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
