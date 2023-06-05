import React, { useState } from "react";

import Skills from "./images/tech-engineer-pink.png";
import { Row, Col } from "reactstrap";
const Home = () => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingTop: "5%",
      }}
    >
      <Row>
        <img src={Skills} style={{ width: "500px" }} />
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="skills_title">Compétences</h1>
      </Row>
      <Row
        style={{ display: "flex", justifyContent: "center", maxWidth: "500px" }}
      >
        <h1 style={{ textAlign: "center",fontSize:"16px" }}>
          Considérez les compétences comme des portes d'entrée vers de nouvelles
          carrières. Ici, vous pouvez explorer différents parcours
          d'apprentissage et de formation et découvrir les options qui
          correspondent le mieux à votre situation de vie.{" "}
        </h1>
      </Row>
    </div>
  );
};

export default Home;
