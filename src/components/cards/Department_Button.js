import React from "react";
import IntlMessages from "../../helpers/IntlMessages";
import { Button } from "reactstrap";
import Classes from "./style.module.css";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const DepartmentButtton = ({ title, icon }) => (
  <div>
    <Button className={Classes.department_card_button}>
      <IntlMessages id="button.read" />
      <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
    </Button>
  </div>
);
export default DepartmentButtton;
