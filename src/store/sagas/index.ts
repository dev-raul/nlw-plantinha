import { all } from "redux-saga/effects";

import { tagsSaga } from './tags'
import { plantsSaga } from './plants'

export default function* rootSage() {
  const allSagas = [tagsSaga, plantsSaga]
  return yield all(allSagas);
}
