import Link from "next/link";
import { Image } from "semantic-ui-react";

const Logo = () => (
  <Link href="/">
    <a>
      <Image src="/logo.png" alt="Logo gaming"></Image>
    </a>
  </Link>
);

export default Logo;
