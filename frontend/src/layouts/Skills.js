import { Col, Container, ProgressBar, Row } from "react-bootstrap";
export function Skills() {
  return (
    <Container id="skills-container" className="mt-5">
      <h1>Skills</h1>
      <Row>
        <Col sm={6}>
          <h1 className="mb-5 mt-5">Frontend Programmer</h1>
          <h4>HTML</h4>
          <ProgressBar className="mb-4" now={70} variant="dark" />
          <h4>CSS</h4>
          <ProgressBar  className="mb-4" now={60} variant="dark" />
          <h4>JS</h4>
          <ProgressBar  className="mb-4" now={50} variant="dark" />
          <h4>REACTJS</h4>
          <ProgressBar  className="mb-4" now={45} variant="dark" />
          <h4>GIT</h4>
          <ProgressBar  className="mb-4" now={50} variant="dark" />
          <h4>BOOTSTRAP</h4>
          <ProgressBar  className="mb-4" now={40} variant="dark" />
          <h4>Angular</h4>
          <ProgressBar  className="mb-4" now={10} variant="dark" />
          <h4>TypeScript</h4>
          <ProgressBar now={10} variant="dark" />
        </Col>
        <Col sm={6}>
          <h1 className="mb-5 mt-5">Backend Programmer</h1>
          <h4>EJS</h4>
          <ProgressBar  className="mb-4" now={40} variant="dark" />
          <h4>MONGODB/MONGOOSE</h4>
          <ProgressBar  className="mb-4" now={40} variant="dark" />
          <h4>NodeJs</h4>
          <ProgressBar  className="mb-4" now={40} variant="dark" />
          <h4>Express</h4>
          <ProgressBar  className="mb-4" now={50} variant="dark" />
          <h4>PHP</h4>
          <ProgressBar  className="mb-4" now={10} variant="dark" />
          <h4>MYSQL</h4>
          <ProgressBar  className="mb-4" now={10} variant="dark" />
        </Col>
      </Row>
    </Container>
  )
}
