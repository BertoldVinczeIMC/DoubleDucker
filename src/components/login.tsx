import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
  setToken: (token: string) => any;
}

export default function Login(props: Props) {
  const handleFormSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget as HTMLFormElement;
    // check if form is valid
    if (!form.checkValidity()) {
      return;
    }

    // get form data from post request
    const data = new FormData(form);

    // convert form data to json
    const json = Object.fromEntries(data.entries());
    console.log(json);

    try{
        const res = await axios.post("http://localhost:5001/api/login", json);
        console.log(res.data.data)
        props.setToken(res.data.data);
    }
    catch(err){
        console.log(err);
    }


  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center w-100">
        <Col lg={12}>
          <Form id="loginform" onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {" "}
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
