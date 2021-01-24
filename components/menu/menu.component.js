import { Container, Grid, Label } from "semantic-ui-react";
import MenuPlataformas from "../menuPlataformas/menuPlataforma.component";
import MenuOpciones from "../menuOpciones/menuOpciones.component";

const MenuTop = () => (
  <div className="menu">
    <Container>
      <Grid>
        <Grid.Column className="menu__left" width={8}>
          <MenuPlataformas />
        </Grid.Column>
        <Grid.Column className="menu__right" width={8}>
          <MenuOpciones />
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default MenuTop;
