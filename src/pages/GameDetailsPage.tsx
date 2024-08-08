import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import GameScreenshots from "../components/GameScreenshots";

interface Props {}

const GameDetailsPage: FC<Props> = ({}: Props) => {
  let { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || slug == undefined) throw new Error("game slug is undefined");

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap="2">
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameSlug={game.slug} />
        <GameScreenshots gameSlug={game.slug} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
