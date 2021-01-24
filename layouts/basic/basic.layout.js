import { Container } from "semantic-ui-react";
import Header from "../../components/header/header.component";

const BasicLayout = ({ children }) => (
  <Container fluid className="basic-layout">
    <Header />
    <Container className="content">{children}</Container>
  </Container>
);

export default BasicLayout;
