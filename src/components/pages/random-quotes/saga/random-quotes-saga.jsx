import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {GET_API_USER} from '../actions/types';
import * as helper from '../../../../helpers/common';
import {getDataQuotes} from '../service/api';

function* quotesSaga() {
    try {
        yield put(actions.startGetApi(true));
        const dataQuotes = yield call(getDataQuotes);

        if(!helper.isEmptyObject(dataQuotes)){
            yield put(actions.getApiSuccess(dataQuotes))
        }else {
            yield put(actions.getApiFail({
                code: 404,
                message: 'data not found!',
            }))
        }
        yield put(actions.stopGetApi(false));
    } catch (error) {
        yield put(actions.getApiFail(error));
    }
}

export default function* watchGetApiSaga(){
    yield takeLatest(GET_API_USER, quotesSaga)
}