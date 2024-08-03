import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import React from "react";
import GameHeading from "../components/GameHeading";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

type Props = {};

const GamesListingPage = (props: Props) => {
  return (
    <>
      <Grid
        templateAreas={{ base: ` "main"`, lg: `"aside main"` }}
        templateColumns={{ base: "1fr", lg: "220px 1fr" }}
        paddingX="5"
      >
        <Show above="lg">
          <GridItem area="aside" bg="" paddingX={1}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading />
            <HStack spacing={5} marginY={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GamesGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default GamesListingPage;
