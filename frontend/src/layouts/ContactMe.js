import { Form, Container, Row, Col } from "react-bootstrap";



export function ContactMe() {
  return (
    <Container className="bg-dark" style={{marginTop: "8rem"}}>
      <Row>
        <Col sm={6} >
          <Form className="mt-5 text-light" >
            <h1>Contact me!</h1>
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
