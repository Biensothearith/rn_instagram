import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "@redux-requests/core";

import {axios} from "../app/index";
import nomalize from "./../../utils/normiliseServerResponce";
import {
    GET_RATE
} from './reducer'

export function* getRateWorker({payload}){
    try {
        const get_rate = yield call(axios.get, "user_wallet/withdraw/wing/price/"+payload.amount+'/'+payload.type);
        yield put({
            type: success(GET_RATE),
            payload:{
                get_rate:nomalize(get_rate)
            }
        })
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError.data || parseError.response
        yield put({
            type:error(GET_RATE),
            payload:{errorGetWithdrawFee:message}
        })
    }
}

export function* homeSaga(){
    yield takeLatest(GET_RATE,getRateWorker);
}