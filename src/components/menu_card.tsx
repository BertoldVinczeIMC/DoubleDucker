import React from 'react'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

interface Props {
    image : any,
    title : string,
    text : string,
    action: string,
    setDisplay: (display: string) => any;
}

export default function MenuCard(props: Props) {

    const handleOnClick = () => {
        props.setDisplay(props.action);
        console.log(props.action);
    }
  return (
    <Col lg={4}>
        <Card onClick={handleOnClick}>
            <Card.Body>
                <Card.Img variant="top" src={props.image} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}