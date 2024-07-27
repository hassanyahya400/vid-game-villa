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
import useGenre, { Genre } from "../hooks/useGenre";
import { getCroppedImageUrl } from "../helper/urlHelper";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
          onClick={() => onSelectGenre(null)}
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
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
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
