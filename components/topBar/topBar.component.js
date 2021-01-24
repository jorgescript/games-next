import { Container, Grid } from "semantic-ui-react";
import Logo from "../logo/logo.component";
import Search from "../search/search.component";

const TopBar = () => (
  <div className="top-bar">
    <Container>
      <Grid className="top-bar">
        <Grid.Column width={8} className="top-bar__left">
          <Logo />
        </Grid.Column>
        <Grid.Column width={8} className="top-bar__right">
          <Search
            id="search-game"
            icon={{ name: "search" }}
            placeholder="Buscar pelicula"
          ></Search>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default TopBar;
