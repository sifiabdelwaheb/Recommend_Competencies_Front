import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* -------------------- Types and Actions Creators ----------------*/

const { Types, Creators } = createActions({
  AnnotatorRequest: ['data'],
  AnnotatorSuccess: ['response'],
  AnnotatorFailure: ['error'],
})

export const AnnotatorTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: null,
  response: {},
  error: null,
  loaded: null,
  data: {},
})
const AnnotatorRequest = (state, { data }) =>
  state.merge({
    fetching: true,
    error: null,
    loaded: null,
  })

const AnnotatorSuccess = (state, { response }) =>
  state.merge({
    fetching: true,
    error: false,
    loaded: true,
    response,
  })

const AnnotatorFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error: true,
    loaded: false,
  })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ANNOTATOR_REQUEST]: AnnotatorRequest,
  [Types.ANNOTATOR_SUCCESS]: AnnotatorSuccess,
  [Types.ANNOTATOR_FAILURE]: AnnotatorFailure,
})
