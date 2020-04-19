import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#fff",
        minHeight: "100px",
        padding: "40px"
      }}
    >
      <Container>
        <center>Copyrights @2020</center>
      </Container>
    </div>
  );
}
