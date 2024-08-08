import { Box } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";
import { getRandomItem } from "../utils/helper/arrayHelpers";
import { Trailer } from "../models/Trailer";

type Props = {
  gameSlug: string;
};

const GameTrailer = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameSlug);
  const video = getRandomItem<Trailer>(data?.results);

  if (error) throw new Error(error.message);
  if (video == undefined) return null;

  return (
    <video controls poster={video.preview} width="100%" src={video.data[480]} />
  );
};

export default GameTrailer;
