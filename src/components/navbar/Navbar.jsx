/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalNavbar from './Modal';


const NavbarFix = ({navbarWhite}) => {
  return (

      <Navbar className={ navbarWhite ? 'backGnd__white': ''} expand="lg" style={{zIndex: '9999'}}>
      <Container fluid>
        <Navbar.Brand href="/">
        <div className="navbar__brand-space">
                <div className="navbar__imgcontainer">
                    <img src="../../../src/assets/logo_ica_noText.png" alt="logo ica" />
                </div>
                <p className="navbar-brand">Instituto Cultural Azteca</p>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <div className='navbar__links'>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link className="navbar__links-item" href="/nosotros">Nosotros</Nav.Link>
                <Nav.Link className="navbar__links-item" href="/admisiones">Admisiones</Nav.Link>
                <NavDropdown title="Oferta Educativa" id="navbarScrollingDropdown">
                <NavDropdown.Item className="navbar__links-subitem" href="/preescolar">
                    Preescolar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar__links-subitem" href="/primaria">
                    Primaria
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar__links-subitem" href="/secundaria">
                    Secundaria
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item className="navbar__links-subitem" href='/preparatoria'>
                    Prepa en Línea
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar__links-subitem" href='/universidad'>
                    Universidad
                </NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item className="navbar__links-subitem" href='/ingles'>
                    Inglés
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navbar__links-item" href="https://c1-azteca.algebraix.com">Algebraix</Nav.Link>
                <Nav.Link className="navbar__links-item" href="/contacto">Contacto</Nav.Link>
            </Nav>
            </div>
            <div className='navbar__modalBtn'>
                {<ModalNavbar/>}
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFix;
