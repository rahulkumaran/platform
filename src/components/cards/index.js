import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Cards = ({ team }) => {
 return (
  <Row xs={1} md={3} className="g-5">
   {team.map((_, idx) => (
    <Col>
     <CustomCard border="secondary">
      <CardImg variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      <Card.Body>
       <Card.Title>{_.name}</Card.Title>
       <Card.Text>
        {_.about}
       </Card.Text>
      </Card.Body>
     </CustomCard>
    </Col>
   ))}
  </Row>

 )
}

export default Cards

const CustomCard = styled(Card)`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 20px !important;
`

const CardImg = styled(Card.Img)`
 border-radius: 20px 20px 0 0 !important; 
`