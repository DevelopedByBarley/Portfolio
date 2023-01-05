import { Form, Container, Row, Col } from "react-bootstrap";
import { AiOutlinePhone } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'



export function ContactMe() {
  return (
    <Container id="contact-container" className="p-3 bg-dark" style={{ marginTop: "8rem" }}>
      <Row>
        <Col sm={6} className="d-flex align-items-center justify-content-center flex-column p-5">
          <div className="m-3 ">
            <AiOutlinePhone color="white" size={35} className="mb-2" />
            <br />
            <span className="text-white  m-3">+36/305541007</span>
          </div>
          <div className="m-3">
            <FiGithub color="white" size={35} className="mb-2" />
            <br />
            <span className="text-white m-3">https://github.com/DevelopedByBarley</span>
          </div>
          <div className="m-3">
            <CiLinkedin color="white" className="mb-2" size={35} />
            <br />
            <span className="text-white">+36/305541007</span>
          </div>
        </Col>
        <Col sm={6} >
          <Form className="mt-5 text-light" >
            <h1 className="mb-5">Contact me!</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

        </Col>

      </Row >
    </Container>
  )
}
