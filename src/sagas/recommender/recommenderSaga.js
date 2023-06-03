import { takeLatest, put, call } from 'redux-saga/effects'
import { BaseURL } from '../../utils/baseURL'
import axiosRequest, { setAuthorizationBearer } from '../../utils/requests'

import RecommenderActions, {
    RecommenderTypes,
} from '../../redux/recommender/recommender'

function* RecommendRequest({ data }) {
  try {
    let response = yield call(axiosRequest, 'post', BaseURL, '/recommender', data)
    console.log('response data', response.data)
    yield put(RecommenderActions.RecommenderSuccess(response.data))
  } catch (e) {
    yield put(RecommenderActions.RecommenderFailure(e))
  }
}
export default function* RecommenderRequest() {
  yield takeLatest(RecommenderTypes.RECOMMENDER_REQUEST, RecommendRequest)
}
