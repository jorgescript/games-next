import Link from "next/link";
import { Menu } from "semantic-ui-react";

const MenuPlataformas = () => (
  <Menu>
    <Link href="/playstation">
      <Menu.Item as="a">PlayStation</Menu.Item>
    </Link>
    <Link href="/playstation">
      <Menu.Item as="a">Xbox</Menu.Item>
    </Link>
    <Link href="/playstation">
      <Menu.Item as="a">Nintendo</Menu.Item>
    </Link>
    <Link href="/playstation">
      <Menu.Item as="a">PC</Menu.Item>
    </Link>
  </Menu>
);

export default MenuPlataformas;
