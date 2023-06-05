import React from "react";
import classes from "./style.module.css";
import { Button } from "reactstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const CartButton = ({ addfunction, style, title, icon }) => (
  <div className={classes.paddingEmp} style={style}>
    <button
      className={classes.abour_contact_button}
      size="sm"
      onClick={() => addfunction()}
    >
      <AddShoppingCartIcon sx={{ color: "#fff", fontSize: 18 }} />
      Add to Cart
    </button>
  </div>
);
export default CartButton;
