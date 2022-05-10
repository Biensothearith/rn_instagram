import { all } from "redux-saga/effects";
import {appSaga} from "../modules/app";
import {homeSaga} from "../modules/home"

const sagas = [
  appSaga(),
  homeSaga()
];

export default function*() {
  yield all(sagas);
}
