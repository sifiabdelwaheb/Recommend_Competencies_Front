import React from "react";
import classes from "./style.module.css";
import iconPlus from "../../assets/svg/plus.svg";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";
const CommandButton = ({ addfunction, style, total }) => (
  <a href={"/checkout"}>
    <div className={classes.paddingEmp} style={style}>
      <Button
        style={{
          backgroundColor: "#283b6a",
          fontWeight: "bold",

          borderColor: "#283b6a",
          marginTop: "40px",
          width: "100%",
        }}
        size="sm"
        onClick={addfunction}
      >
        Commander ({total} TND)
      </Button>
    </div>
  </a>
);
export default CommandButton;
