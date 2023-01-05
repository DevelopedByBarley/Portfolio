import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import me from '../assets/images/me.jpg'
import CV from '../assets/files/CV.pdf'


export function About() {
  return (
    <Container id='about' className='p-5 mt-5 mb-5'>
      <h1 className='mb-5'>About me</h1>
      <Row style={{ minHeight: "400px" }}>
        <Col sm={4} className='d-flex align-items-center justify-content-center flex-column  '>
          <div sm={12} className='bg-dark' style={{ height: "250px", width: "250px", margin: "0 auto", borderRadius: "20px" }}>
            <img src={me} className="w-100 h-100 shadow  mb-5 bg-white rounded" />
          </div>
        </Col>
        <Col sm={8} className='about-me-content mt-5   d-flex align-items-center justify-content-center flex-column'>
          <Row className='properties w-100 bg-dark text-white' style={{ minHeight: "150px" }}>
            <Col sm={4} className=' mt-3 p-2 '>
              <BiTime size={35} />
              <h4>Experience</h4>
              <p>1+ Year</p>
            </Col>
            <Col sm={4} className=' mt-3 p-2'>
              <IoCheckmarkDoneCircleOutline size={35} />
              <h4>Completed</h4>
              <p>3+ Project</p>
            </Col>
            <Col sm={4} className=' mt-3  p-2'>
              <BiTime size={35} />
              <h4>Experience</h4>
              <p>1+ Year</p>
            </Col>
          </Row>
          <Row className='description'>
            <Col sm={12} className="p-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi elit,
                maximus vitae laoreet in, blandit ut est. Phasellus quis sem commodo,
                accumsan lorem at, egestas diam. Etiam ut viverra turpis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi elit,
                maximus vitae laoreet in, blandit ut est. Phasellus quis sem commodo,
                accumsan lorem at, egestas diam. Etiam ut viverra turpis.</p>
            </Col>
          </Row>
          <a href={CV} download><Button variant='dark'>Download CV <BsFillCloudDownloadFill /></Button></a>
        </Col>
      </Row>
    </Container>
  )
}
