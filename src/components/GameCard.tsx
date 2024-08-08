import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../models/Game";
import { getCroppedImageUrl } from "../utils/helper/urlHelper";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={{ lg: "350" }}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name + " image"}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom="2">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platforms) => platforms.platform,
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Link to={game.slug}>
          <Heading fontSize="xl" marginY="2">
            {game.name}
          </Heading>
        </Link>
        <Emoji rating_top={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
