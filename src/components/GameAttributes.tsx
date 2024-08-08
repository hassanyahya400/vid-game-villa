import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import { Platform } from "../models/Platform";
import { Genre } from "../models/Genre";
import { Publisher } from "../models/Publisher";
import { Game } from "../models/Game";
import { FC } from "react";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes: FC<Props> = ({ game }: Props) => {
  if (!game) return null;
  return (
    <SimpleGrid columns={2} gap="5" marginBlock="5">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
