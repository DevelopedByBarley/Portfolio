import { Container, Row, Col, Carousel } from "react-bootstrap"
import { CardComponent } from "../components/CardComponent"
import recipe from '../assets/images/recipe.jpg'
import todoApp from '../assets/images/todoApp.jpg'
import webshop from '../assets/images/webshop.jpg'



export function Works() {
  return (
    <>
      <h1 className="mt-5">Works</h1>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <Container className="mt-5"  style={{ minHeight: "300px" }}>
            <Row>
              <Col sm={12} className="d-flex align-items-center justify-content-center">
                <CardComponent
                  image={todoApp}
                  title={"ToDo App"}
                  text={"React, Mongodb, Express!"}
                />
              </Col>
            </Row>
          </Container>

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Container className="mt-5" style={{ minHeight: "300px" }}>
            <Row>
              <Col sm={12} className="d-flex align-items-center justify-content-center">
                <CardComponent
                  image={recipe}
                  title={"ToDo App"}
                  text={"Todo project lorem ipsum"}
                />
              </Col>
            </Row>
          </Container>

        </Carousel.Item>
        <Carousel.Item>
          <Container className="mt-5"  style={{ minHeight: "300px" }}>
            <Row>
              <Col sm={12} className="d-flex align-items-center justify-content-center">
                <CardComponent
                  image={webshop}
                  title={"ToDo App"}
                  text={"Todo project lorem ipsum"}
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
