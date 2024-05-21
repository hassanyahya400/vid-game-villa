import { useState } from "react";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
