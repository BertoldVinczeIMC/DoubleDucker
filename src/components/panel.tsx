import React,{useState,useEffect} from "react";

import Menu from "./menu";
import Settings from "./settings";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Panel() {
    const [display, setDisplay] = useState("Menu");

    useEffect(() => {
        console.log(display);
    }, [display]);

    // if component dismounts, console.log("unmount")
    useEffect(() => {
        return () => {
            console.log("unmount");
        };
    }, []);

  return (
    <Container fluid className="panel">
        {display === "Menu" && <Menu setDisplay={setDisplay} />}
        {display === "Create" && <div>create</div>}
        {display === "Settings" && <Settings setDisplay={setDisplay}/>}
    </Container>
    );      
}
