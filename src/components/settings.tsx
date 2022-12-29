import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Settings() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/urls")
      .then((res) => {
        console.log(res.data)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="settings">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Encoded</th>
            <th>Decoded</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr key={item._id}>
                <td>{item.encoded}</td>
                <td>{item.decoded}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="danger">Delete all</Button>
    </Container>
  );
}
