import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* -------------------- Types and Actions Creators ----------------*/

const { Types, Creators } = createActions({
  RecommenderRequest: ['data'],
  RecommenderSuccess: ['response'],
  RecommenderFailure: ['error'],
})

export const RecommenderTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: null,
  response: {},
  error: null,
  loaded: null,
  data: {},
})
const RecommenderRequest = (state, { data }) =>
  state.merge({
    fetching: true,
    error: null,
    loaded: null,
  })

const RecommenderSuccess = (state, { response }) =>
  state.merge({
    fetching: true,
    error: false,
    loaded: true,
    response,
  })

const RecommenderFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error: true,
    loaded: false,
  })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECOMMENDER_REQUEST]: RecommenderRequest,
  [Types.RECOMMENDER_SUCCESS]: RecommenderSuccess,
  [Types.RECOMMENDER_FAILURE]: RecommenderFailure,
})
