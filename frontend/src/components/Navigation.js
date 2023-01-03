import { Nav, Navbar, Container } from 'react-bootstrap'


export function Navigation() {
  return (
    <>
      <Navbar bg="dark" className='sticky-top' expand="lg" variant="dark" style={{zIndex: "99"}}>
        <Container>
          <Navbar.Brand href="#header-container">Icon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#header-container">Kezdőlap</Nav.Link>
              <Nav.Link href="#about">Rólam</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
