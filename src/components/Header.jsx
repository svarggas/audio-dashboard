import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"} replace>
          <Navbar.Brand>Audios</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;