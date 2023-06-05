import React from 'react'
import classes from './style.module.css'
import { Button } from 'reactstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IntlMessages from '../../helpers/IntlMessages'

const CartButton = ({ addfunction, style, title, icon }) => (
  <div className={classes.paddingEmp} style={style}>
    <button
      className={classes.abour_contact_button}
      size="sm"
      onClick={() => addfunction()}
    >
      <IntlMessages id="button.ContactUS" />

      <KeyboardArrowRightIcon sx={{ color: '#fff', fontSize: 18 }} />
    </button>
  </div>
)
export default CartButton
