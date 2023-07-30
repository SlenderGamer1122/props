import React from 'react'
import { Button,Card } from 'react-bootstrap'

const ProductCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <Card.Text>
          {props.model}
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard