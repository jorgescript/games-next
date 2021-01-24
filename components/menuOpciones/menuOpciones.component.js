import Link from "next/link";
import { Menu, Icon } from "semantic-ui-react";

const MenuOpciones = () => (
  <Menu>
    <Link href="/playstation">
      <Menu.Item as="a">
        <Icon name="user outline" />
        Mi cuenta
      </Menu.Item>
    </Link>
  </Menu>
);

export default MenuOpciones;
