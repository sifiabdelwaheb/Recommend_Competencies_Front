import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { injectIntl } from "react-intl";
import { Card, CardBody, CardTitle } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import plantimg from "../../assets/images/medium.jpeg";
import Classes from "./style.module.css";
import HomeIcon from "./HomeIcon";
import logo from "../../assets/images/dialysis-machine-line-icon-on-white-vector-39040339.png";
import { Row, Col } from "reactstrap";
import CheckIcon from "@mui/icons-material/Check";
import DepartmentButtton from "./Department_Button";
const DepartmentCard = (props) => {
  const { alt, src, className, rounded, small, title } = props;
  return (
    <Card
      className={Classes.department_card_style}
      style={{ borderRadius: "12px", marginBottom: "2%", maxWidth: "400px" }}
    >
      <CardTitle
        style={{
          backgroundColor: "#fff",
          height: "70px",
          color: "#43A047",
          paddingLeft: "10%",
          paddingTop: "5%",
          cursor: "pointer",
        }}
      >
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col>
            <div
              style={{
                height: "90px",
                width: "90px",
                borderRadius: "50%",
              }}
            >
              <img
                style={{
                  maxHeight: "auto",
                  width: "100%",
                }}
                alt={alt}
                src={src}
              />
            </div>
            <div className={Classes.department_card_title}>{title}</div>
          </Col>
        </Row>
      </CardTitle>
      <CardBody style={{ marginTop: "40px", marginBottom: "40px" }}>
        <div className={Classes.department_card_description}>
          Some neurologists receive subspecialty training focusing on a
          particular area of the fields, these training programs are called
          fellowships, and are one to two years.
        </div>

        <Row style={{ marginTop: "40px", paddingLeft: "5%" }}>
          <CheckIcon
            sx={{ color: "#72d9ce", fontSize: 15 }}
            style={{ marginLeft: "5px" }}
          />{" "}
          <div className={Classes.department_card_check}>
            Neurocritical Care
          </div>
        </Row>
        <Row style={{ paddingLeft: "5%" }}>
          <CheckIcon
            sx={{ color: "#72d9ce", fontSize: 15 }}
            style={{ marginLeft: "5px" }}
          />{" "}
          <div className={Classes.department_card_check}>
            Neurocritical Care
          </div>
        </Row>
        <Row style={{ paddingLeft: "5%" }}>
          <CheckIcon
            sx={{ color: "#72d9ce", fontSize: 15 }}
            style={{ marginLeft: "5px" }}
          />{" "}
          <div className={Classes.department_card_check}>
            Neurocritical Care
          </div>
        </Row>
        <DepartmentButtton />
      </CardBody>
    </Card>
  );
};
export default injectIntl(DepartmentCard);
