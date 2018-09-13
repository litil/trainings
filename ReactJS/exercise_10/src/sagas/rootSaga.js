import { fork } from 'redux-saga/effects'
import { createTransactionWatcherSaga } from './createTransactionSaga'
import { listTransactionWatcherSaga } from './listTransactionSaga'

export default function* rootSaga() {
    yield [
        fork(createTransactionWatcherSaga),
        fork(listTransactionWatcherSaga)
	];
}
