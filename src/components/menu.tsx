import React from "react";

import MenuCard from "./menu_card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import add from "../images/international-svgrepo-com.svg";
import settings from "../images/cog-svgrepo-com.svg";
import exit from "../images/exit-svgrepo-com.svg";

interface Props {
  setDisplay: (display: string) => void;
}

export default function Menu(props: Props) {
  return (
    <Container className="menu d-flex justify-content-center align-items-center">
      <Row className="w-100 m-5">
        <MenuCard
          action={"Create"}
          setDisplay={props.setDisplay}
          image={add}
          title={"Menu1"}
          text={"Create new Short URL"}
        />
        <MenuCard
          action={"Settings"}
          setDisplay={props.setDisplay}
          image={settings}
          title={"Menu2"}
          text={"Go to Settings"}
        />
        <MenuCard
          action={"Exit"}
          setDisplay={props.setDisplay}
          image={exit}
          title={"Menu3"}
          text={"Exit app"}
        />
      </Row>
    </Container>
  );
}
