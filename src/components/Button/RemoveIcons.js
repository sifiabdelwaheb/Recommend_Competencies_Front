import React from "react";
import classes from "./style.module.css";
import iconPlus from "../../assets/svg/plus.svg";
import { Button } from "reactstrap";
import RemoveIcon from '@mui/icons-material/Remove';
const RemoveIcons = ({ addfunction, style }) => (
  <div className={classes.paddingEmp} style={style}>
    <button
      style={{
        backgroundColor: "#223620",
        fontWeight: "bold",

        borderColor: "#223620",
        width: "40px",
        height: "40px",
        marginRight: "10px",
        textAlign: "center",
        marginTop:'10px',
        borderRadius:'50%'
      }}
      size="sm"
      onClick={addfunction}
    >
      <RemoveIcon sx={{ color: "#fff", fontSize: 30 }} />
    </button>
  </div>
);
export default RemoveIcons;
