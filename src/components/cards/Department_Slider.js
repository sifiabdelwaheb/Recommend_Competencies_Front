import React from "react";
import Classes from "./style.module.css";

import Slider from "react-slick";
import logo from "../../assets/svg/bioservice.svg";
import { Card, CardBody, CardTitle } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import plantimg from "../../assets/images/medium.jpeg";
import HomeIcon from "./HomeIcon";
import { Row, Col } from "reactstrap";
import CheckIcon from "@mui/icons-material/Check";
import DepartmentButtton from "./Department_Button";
import departmentitems from "../../data/department_card";
export default function DepartmentSlider(props) {
  return (
    <div>
      <Slider
         dots={true}
         slidesToShow={3}
         slidesToScroll={1}
         autoplay={true}
         autoplaySpeed={2000}
         pauseOnHover={true}
      >
        {departmentitems.map((item) => (
          <div key={item.id}>
            <Card
              className={Classes.department_card_style}
              style={{
               
                marginBottom: "2%",
                maxWidth: "400px",
                borderRadius:'12px'
              }}
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
                        alt={"alt"}
                        src={item.image}
                      />
                    </div>
                    <div className={Classes.department_card_title}>
                      {item.title}
                    </div>
                  </Col>
                </Row>
              </CardTitle>
              <CardBody style={{ marginTop: "40px", marginBottom: "40px" }}>
                <div className={Classes.department_card_description}>
                  Some neurologists receive subspecialty training focusing on a
                  particular area of the fields, these training programs are
                  called fellowships, and are one to two years.
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
