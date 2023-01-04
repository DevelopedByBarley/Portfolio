import { Col, Container, ProgressBar, Row } from "react-bootstrap";
export function Skills() {
  return (
    <Container className="mt-5">
      <h1>Skills</h1>
      <Row>
        <Col sm={6}>
          <h4>HTML</h4>
          <ProgressBar now={70} variant="dark" />
          <h4>CSS</h4>
          <ProgressBar now={60} variant="dark" />
          <h4>JS</h4>
          <ProgressBar now={50} variant="dark" />
          <h4>REACTJS</h4>
          <ProgressBar now={45} variant="dark" />
          <h4>NodeJs</h4>
          <ProgressBar now={40} variant="dark" />
          <h4>Express</h4>
          <ProgressBar now={50} variant="dark" />

        </Col>
        <Col sm={6}>
          <h4>EJS</h4>
          <ProgressBar now={40} variant="dark" />
          <h4>MONGODB/MONGOOSE</h4>
          <ProgressBar now={40} variant="dark" />
          <h4>GIT</h4>
          <ProgressBar now={50} variant="dark" />
          <h4>BOOTSTRAP</h4>
          <ProgressBar now={40} variant="dark" />
          <h4>Angular</h4>
          <ProgressBar now={25} variant="dark" />
          <h4>TypeScript</h4>
          <ProgressBar now={25} variant="dark" />

        </Col>
        <Col>

        </Col>
      </Row>
    </Container>
  )
}
