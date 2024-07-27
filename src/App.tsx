import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameHeading from "./components/GameHeading";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortOrder: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <GridItem area="nav" bg="">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="" paddingX={1}>
          <GenreList
            onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginY={5}>
            <PlatformSelector
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platformId })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
