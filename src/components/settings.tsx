import React, { useEffect, useState } from "react";
import axios from "axios";

import Controls from "./controls";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface Props {
  setDisplay: (display: string) => any;
}

export default function Settings(props:Props) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    let token = localStorage.getItem("doubleducker-token");
    if (!token) {
      window.location.href = "/";
    }
    // set authorization header in get request
    axios
      .get("http://localhost:5001/api/urls", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  const deleteUrl = (encoded: string) => {
    let token = localStorage.getItem("doubleducker-token");
    if (!token) {
      window.location.href = "/";
    }
    axios
      .delete(`http://localhost:5001/api/url/${encoded}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(data.filter((item: any) => item.encoded !== encoded));
      })
      .catch((err) => {
        localStorage.removeItem("doubleducker-token");
        window.location.href = "/";
      });
  };

  const deleteAll = () => {
    let token = localStorage.getItem("doubleducker-token");
    if (!token) {
      window.location.href = "/";
    }
    axios
      .delete(`http://localhost:5001/api/urls`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData([]);
      })
      .catch((err) => {
        localStorage.removeItem("doubleducker-token");
        window.location.href = "/";
      });
  };

  return (
    <Container className="settings">
      <Controls action="Menu" setDisplay={props.setDisplay} />
      <Row className="d-flex justify-content-center mt-5">
        <Col className="p-0">
          <h1>My URLs</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Encoded</th>
                <th>Decoded</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any) => (
                <tr key={item.encoded}>
                  <td>{item.encoded}</td>
                  <td>{item.decoded}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteUrl(item.encoded);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            variant="danger"
            onClick={() => {
              deleteAll();
            }}
          >
            Delete all
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
