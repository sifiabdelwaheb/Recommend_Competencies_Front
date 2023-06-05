import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import plantimg from "../../assets/images/medium.jpeg";
import species from "../../data/species";
import { Button } from "@material-ui/core";
import Slider from "./Slider";
import SendIcon from "@mui/icons-material/Send";
import { green, white } from "@mui/material/colors";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import RealisaionSlider from "./Realisation_Slider";
import ViewButton from "../Button/ViewButton";
import DepartmentButtton from "../Button/DepartmentButtton";
import Classes from './styles.module.css'
import {
  Row,
  Col,
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const RealisationCard = (props) => (
  <div>
    <Row>
      <RealisaionSlider image={props.image} />
    </Row>
    <div className={Classes.realisation_component}>
      <Row>
        <div className={Classes.realisation_project_title}>{props.name}</div>
      </Row>
      <Row>
        <Col className={Classes.dialysis_machine_product_description}>
          {props.description}
        </Col>
      </Row>
      <Row style={{ padding: "5%" }}>
        <DepartmentButtton title={"Read More"}/>
      </Row>
    </div>
  </div>
);
export default RealisationCard;
