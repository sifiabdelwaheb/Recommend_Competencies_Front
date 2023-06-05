import React from "react";
import classes from "./style.module.css";
import { Button } from "reactstrap";

const AddButton = ({ addfunction, style }) => (
  <div className={classes.paddingEmp} style={style}>
    <Button
      style={{
        backgroundColor: "#223620",
        fontWeight: "bold",

        borderColor: "#223620",
      }}
      size="sm"
      onClick={addfunction}
    >
      Test
    </Button>
  </div>
);
export default AddButton;
