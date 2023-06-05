import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import plantimg from "../../assets/images/medium.jpeg";
import species from "../../data/species";
import itemData from "../../data/images";
import { Button } from "@mui/material";
import "./styles.module.css";
import QuiltedImageList from "./QuiltedImageList";
import DepartmentButtton from "../Button/DepartmentButtton";
import { Row, Col } from "reactstrap";
const ProductsCard = (props) => (
  <div className="department_dialysis_card">
    <div className="department_dialysis_product_title">{props.title}</div>
    <hr style={{ minHeight: "2px" }} />
    <Row>
      <Col style={{ minWidth: "420px" }}>
        <QuiltedImageList itemData={props.itemData} />
      </Col>

      <Col className="product_card_details">
        <Row>
          <div className="dialysis_machine_product_title">Products </div>
        </Row>
        <Row>
          <Col className="dialysis_machine_product_description">
            {props.description}
          </Col>
        </Row>
        <Row style={{ padding: "5%" }}>
          <DepartmentButtton title="View Product" />
        </Row>
      </Col>
    </Row>
  </div>
);
export default ProductsCard;
