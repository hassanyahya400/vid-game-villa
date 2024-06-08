import { useState } from "react";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/useGame";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

  const handleSelectedGenre = (genre: Genre | null) => {
    setSelectedGenre(genre);
  };

  const handleSelectedPlatform = (platform: Platform | null) => {
    setSelectedPlatform(platform);
  };

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="" paddingX={1}>
          <GenreList
            onSelectGenre={handleSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={handleSelectedPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlaform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
