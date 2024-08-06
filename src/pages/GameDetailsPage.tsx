import { Box, Heading, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";

interface Props {}

const GameDetailsPage: FC<Props> = ({}: Props) => {
  let { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || slug == undefined) throw new Error("game slug is undefined");

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailsPage;
