import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/Digital Lips.png';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function DpNav() {
  return (
    <Navbar style={{ backgroundColor: '#fa9ece' }} data-bs-theme="dark">
      <Container>
        <Link className='navlinks' to='/' exact><Navbar.Brand><img src={logo} className='navimg' /> Digital Pleasures</Navbar.Brand></Link>
        <Nav className="me-auto">
          <Link className='navlinks' to='/users' exact><Nav>Usuarios</Nav></Link>
          <Link className='navlinks' to='/products' exact><Nav>Productos</Nav></Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default DpNav;