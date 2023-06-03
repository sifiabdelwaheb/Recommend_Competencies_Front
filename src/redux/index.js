import { combineReducers } from 'redux'
import settings from './settings/reducer'
import { reducer as auth } from './auth/authUserRedux'
import { reducer as contactUs } from './auth/contactUsRedux'
import menu from './menu/reducer'
import { reducer as addUser } from './users/addUserRedux'
import { reducer as editUser } from './users/editUserRedux'
import { reducer as deleteUser } from './users/deleteUserRedux'
import { reducer as allUsers } from './users/getAllUsersRedux'
import { reducer as annotateText } from './annotator/annotatorText'
import {reducer as recommender} from "./recommender/recommender"
const reducers = combineReducers({
  settings,
  allUsers,
  deleteUser,
  auth,
  menu,
  contactUs,

  addUser,
  editUser,
  annotateText,
  recommender
})

export default reducers
