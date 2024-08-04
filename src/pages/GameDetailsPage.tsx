import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";

interface Props {}

const GameDetailsPage: FC<Props> = ({}: Props) => {
  let { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || slug == undefined) throw new Error("game slug is undefined");

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
