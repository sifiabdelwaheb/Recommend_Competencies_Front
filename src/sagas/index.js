import { all, fork } from "redux-saga/effects";
import auth from "./auth";

import language from "./language";
import editUser from "./users";
import annotate from "./annotator";
import recommender from "./recommender";
const sagas = [...auth, ...language, ...editUser, ...annotate, ...recommender];
function* rootSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}
export default rootSaga;
