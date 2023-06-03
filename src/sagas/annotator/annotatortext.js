import { takeLatest, put, call } from 'redux-saga/effects'
import { BaseURL } from '../../utils/baseURL'
import axiosRequest, { setAuthorizationBearer } from '../../utils/requests'

import AnnotatorActions, {
  AnnotatorTypes,
} from '../../redux/annotator/annotatorText'

function* AnnotateRequest({ data }) {
  try {
    let response = yield call(axiosRequest, 'post', BaseURL, '/recommender', data)
    console.log('response data', response.data)
    yield put(AnnotatorActions.AnnotatorSuccess(response.data))
  } catch (e) {
    yield put(AnnotatorActions.AnnotatorFailure(e))
  }
}
export default function* AnnotatorRequest() {
  yield takeLatest(AnnotatorTypes.ANNOTATOR_REQUEST, AnnotateRequest)
}
