import { call, put, all, takeLatest } from "redux-saga/effects";
import { TagsType } from "../../@types";
import api from "../../services/api";
import { Types, Creators as Actions } from "../ducks/tags";

function* getTags() {
  try {
    const { data }: { data: TagsType[] } = yield call(api.get, `plants_environments?_sort=title&_order=asc`);
    yield put(Actions.getSuccess([{ key: 'all', title: 'Todos' }, ...data]));
  } catch (err) {
    yield put(Actions.getFailure());
  }
}

export const tagsSaga = all([
  takeLatest(Types.GET_REQUEST, getTags)
]);
