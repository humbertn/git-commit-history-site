import { Navbar, Container} from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#">Gerson Estrada</Navbar.Brand>          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;