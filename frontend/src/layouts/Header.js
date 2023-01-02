import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { BsArrowUpRightCircle, BsFillArrowDownCircleFill } from 'react-icons/bs'
import me from '../assets/images/me.jpg'

import '../styles/layouts/Header.css'

export function Header() {
  return (
    <Container id='header-container'>
      <Row className='header'>
        <Col className='d-flex align-items-center justify-content-center flex-column border' >
          <Row>
            <Col sm={12} className=' text-light'>
              <div className='header-image  mb-5'>
                <img src={me} className="w-100 h-100 shadow  mb-5 bg-white rounded"/>
              </div>
            </Col>
            <Col sm={12} className='profile-content'>
              <h2 className="name">Szaniszló Árpád</h2>
              <h4 className='profession'>Wev developer</h4>
              <p className='description'>I'm Creative designer based in New York, And i'm very passionate and dedicated to my work.</p>
              <Button variant='dark'>Say Hello! <BsArrowUpRightCircle /></Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Nav.Link href="#about">
            <BsFillArrowDownCircleFill size={30}  className="m-5"/>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  )
}
