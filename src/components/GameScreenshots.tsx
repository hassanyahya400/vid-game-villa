import { SimpleGrid, Image, Skeleton } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameSlug: string;
}

const GameScreenshots = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameSlug);

  if (error) throw new Error(error.message);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="2">
      {data?.results.map((s) =>
        isLoading ? (
          <Skeleton height={s.height} width={s.width} />
        ) : (
          <Image key={s.id} src={s.image} />
        ),
      )}
    </SimpleGrid>
  );
};

export default GameScreenshots;
