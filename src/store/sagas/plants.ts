import { call, put, all, takeLatest } from "redux-saga/effects";
import { PlantsTypes } from "../../@types";
import api from "../../services/api";
import { Types, Creators as Actions, GetRequestProps } from "../ducks/plants";

function* getPlants({ query }: GetRequestProps) {
  try {
    const { data }: { data: PlantsTypes[] } = yield call(api.get, `plants${query}`);
    yield put(Actions.getSuccess(data));
  } catch (err) {
    yield put(Actions.getFailure());
  }
}

export const plantsSaga = all([
  takeLatest(Types.GET_REQUEST, getPlants)
]);
