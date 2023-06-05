import React from "react";
import { Button } from "reactstrap";
import Classes from "./style.module.css";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const RealisationButton = ({ title, icon }) => (
  <div>
    <Button className={Classes.realisation_card_button}>
      {title}
      <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
    </Button>
  </div>
);
export default RealisationButton;
