import { Container } from "semantic-ui-react";
const Basic = ({ children }) => (
  <Container fluid className="basic-layout">
    <Container className="content">{children}</Container>
  </Container>
);

export default Basic;
