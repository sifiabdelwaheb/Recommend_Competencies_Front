import React from 'react'
import Classes from './style.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SendIcon from '@mui/icons-material/Send'
import { Button } from '@material-ui/core'
import IntlMessages from '../../helpers/IntlMessages'

const MessageButton = ({ addfunction, style, title, icon }) => (
  <div>
    <button className={Classes.contact_send_button}>
      <IntlMessages id="button.send" />
      <SendIcon
        sx={{ color: '#fff', fontSize: 12 }}
        style={{ marginLeft: '5px' }}
      />
    </button>
  </div>
)
export default MessageButton
