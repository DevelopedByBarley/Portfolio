import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { BsArrowUpRightCircle, BsFillArrowDownCircleFill } from 'react-icons/bs'
import me from '../assets/images/me.jpg'

import '../styles/layouts/Header.css'

export function Header() {
  return (
    <Container id='header-container'>
      <Row className='header mt-5'>
        <Col className='d-flex align-items-center justify-content-center flex-column' >
          <Row>
            <Col sm={12} className=' text-light'>
              <div className='header-image mb-5'>
                <img src={me} className="w-100 h-100 shadow  mb-5 bg-white " />
              </div>
            </Col>
            <Col sm={12} className='profile-content'>
              <h1 className="name">Szaniszló Árpád</h1>
              <h3 className='profession'>Wev developer</h3>
              <p className='description w-70 m-auto mb-5 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi elit,
                maximus vitae laoreet in, blandit ut est. Phasellus quis sem commodo,
                accumsan lorem at, egestas diam. Etiam ut viverra turpis.</p>
              <Nav.Link href="#contact-container">
                <Button variant='dark'>Contact me!<BsArrowUpRightCircle size={25} /></Button>
              </Nav.Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Nav.Link href="#about">
            <BsFillArrowDownCircleFill size={30} className="m-5" />
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  )
}
