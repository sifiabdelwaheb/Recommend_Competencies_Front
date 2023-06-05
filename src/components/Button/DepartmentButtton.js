import React from "react";
import { Button } from "reactstrap";
import Classes from "./style.module.css";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const DepartmentButtton = ({ title, icon }) => (
  <div>
    <button className={Classes.department_card_button}>
      {title}
      <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
    </button>
  </div>
);
export default DepartmentButtton;
