import React from "react";
import classes from "./style.module.css";
import { Button } from "reactstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ViewButton = ({ addfunction, style, title, icon }) => (
  <div>
    <Button className={classes.component_view_button} size="sm">
      view
      <KeyboardArrowRightIcon sx={{ color: "#fff", fontSize: 18 }} />
    </Button>
  </div>
);
export default ViewButton;
