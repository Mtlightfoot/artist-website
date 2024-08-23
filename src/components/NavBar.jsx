// React bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (

        <Navbar id='navBar' variant='dark' expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link id='navLink' href="#home">Artworks</Nav.Link>
                        <Nav.Link id='navLink' href="#link">Artists</Nav.Link>
                        <Nav.Link id='navLink' href="#link">Exhibitions</Nav.Link>
                        <Nav.Link id='navLink' href="#link">Journal</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='navbar-brand-center mx-0' id='logo' href="#home">ACME Co</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="rightSideNav basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link id='navLink' href="#home">About</Nav.Link>
                        <Nav.Link id='navLink' href="#link">Enquire</Nav.Link>
                        <Nav.Link id='navLink' href="#link">Search <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar