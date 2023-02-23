import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Spaceflight</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Biscuit Report</Nav.Link>
          <Nav.Link href="#pricing">Morgan news</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
