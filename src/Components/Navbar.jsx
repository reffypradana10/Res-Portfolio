import { Navbar, Nav } from "react-bootstrap";

function NavbarCompo() {
  return (
    <Navbar expand="lg" className="bg-body-success justify-content-around pb-3 pt-3" bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">Responsive Portfolio</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#link">Scholl</Nav.Link>
        <Nav.Link href="#link">Work Experience</Nav.Link>
        <Nav.Link href="#link">Sertificate</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarCompo;
