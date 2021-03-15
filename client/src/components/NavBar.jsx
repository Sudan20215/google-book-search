import { Navbar,Nav} from "react-bootstrap";
const NavBar = () => {
    return (
        <Navbar className="w-100 bg-dark text-white">
        <Navbar.Brand href="/" className="text-white">Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/Search" className="text-white">Searched</Nav.Link>
            <Nav.Link href="/" className="text-white">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
