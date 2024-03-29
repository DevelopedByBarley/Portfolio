import { Nav, Navbar, Container } from 'react-bootstrap'

export function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant='dark' className='sticky-top' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#header-container">Home</Nav.Link>
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#services-container">Services</Nav.Link>
              <Nav.Link href="#works-container">Works</Nav.Link>
              <Nav.Link href="#skills-container">Skills</Nav.Link>
              <Nav.Link href="#contact-container">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

