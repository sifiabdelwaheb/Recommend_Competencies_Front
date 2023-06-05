import React from "react";
import classes from "./style.module.css";
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ServiceButton = ({ addfunction, style, title, icon }) => (
  <div className={classes.paddingEmp} style={style}>
  <button
     className={classes.about_service_button}
    >
      Services
      <KeyboardArrowRightIcon sx={{ color: "#213360", fontSize: 18 }} />
    </button>
      
     
  </div>
);
export default ServiceButton;
