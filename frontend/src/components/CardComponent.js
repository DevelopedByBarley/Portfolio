import { Button, Card } from 'react-bootstrap'

export function CardComponent({ image, title, text }) {
  return (
    <Card className='shadow  mb-5 bg-white rounded'  style={{width: '25rem', marginBottom: "2rem", border: "none" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <a href><Button variant="dark" className='m-2'>Live</Button></a>
        <a href="#"><Button variant="dark" className='m-2'>Code</Button></a>
      </Card.Body>
    </Card>
  )
}
