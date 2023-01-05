import { Container, Row, Col, Button } from 'react-bootstrap'
import development from '../assets/images/development.png'
import uiDesign from '../assets/images/uiDesign.png'
import brandDesign from '../assets/images/brandDesign.png'
import '../styles/layouts/Services.css'

export function Services() {
  return (
    <Container id='services-container'>
      <h1>Services</h1>
      <Row style={{ minHeight: "300px" }} className="border mt-5 services">
        <Col  sm={4} className="border services-card">
          <img src={development} className="w-100 mb-3" />
          <h1 className='mb-3 mt-3'>Web Developer</h1>
          <Button className='mb-3' variant="dark">View More</Button>
        </Col>
        <Col sm={4} className="border services-card">
          <img src={uiDesign} className="w-100  mb-3" />
          <h1 className='mb-3 mt-3'>UI/UX Designer</h1>
          <Button className='mb-3' variant="dark">View More</Button>
        </Col>
        <Col sm={4} className="border services-card">
          <img src={brandDesign} className="w-100 mb-3" />
          <h1  className='mb-3 mt-3'>Branding Designer</h1>
          <Button className='mb-3' variant="dark">View More</Button>
        </Col>
      </Row>
    </Container>
  )
}
