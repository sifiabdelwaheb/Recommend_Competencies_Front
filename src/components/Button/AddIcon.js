import React from "react";
import classes from "./style.module.css";
import iconPlus from "../../assets/svg/plus.svg";
import { Button } from "reactstrap";
import AddIcon from "@mui/icons-material/Add";
const AddIcons = ({ addfunction, style }) => (
  <div className={classes.paddingEmp} style={style}>
    <button
      style={{
        backgroundColor: "#223620",
        fontWeight: "bold",

        borderColor: "#223620",
        width: "40px",
        height: "40px",
        marginLeft: "10px",
        marginRight: "50px",
        textAlign: "center",
        marginTop:'10px',
        borderRadius:"50%"
      }}
      size="sm"
      onClick={addfunction}
    >
      <AddIcon sx={{ color: "#fff", fontSize: 30 }} />
    </button>
  </div>
);
export default AddIcons;
