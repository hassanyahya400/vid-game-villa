import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { getCroppedImageUrl } from "../helper/urlHelper";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../state-management/store";
import { FC } from "react";

interface Props {}
const GenreList: FC<Props> = ({}: Props) => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <Fragment>
      <Heading fontSize="2xl" marginBlock="2">
        Genres
      </Heading>
      <List>
        <Button
          variant="link"
          fontSize="lg"
          onClick={() => setSelectedGenreId(-1)}
        >
          All
        </Button>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="24px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="5px"
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

export default GenreList;
