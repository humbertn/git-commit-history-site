import { Navbar, Nav, Container} from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gerson Estrada</Navbar.Brand>          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;