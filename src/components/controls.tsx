import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface Props {
    action: string;
    setDisplay: (display:string) => any;
}

export default function Controls(props: Props) {
  return (
    <Row className="mt-5 w.100">
      <Button className="w-100" variant="primary" onClick={()=>{
            props.setDisplay(props.action);
      }} >
        Back to Menu
      </Button>
    </Row>
  );
}
