import {all, call} from 'redux-saga/effects';
import watchGetApiSaga from '../components/pages/random-quotes/saga/random-quotes-saga';

export default function* rootSaga() {
    yield all([
        call(watchGetApiSaga)
    ])
}