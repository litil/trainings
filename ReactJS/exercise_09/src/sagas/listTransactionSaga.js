import { takeEvery, call, put } from "redux-saga/effects"
import * as actions from '../actions/actionTypes.js'
import axios from "axios"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* listTransactionWatcherSaga() {
  yield takeEvery(actions.LIST_TRANSACTION_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function listTransaction() {
  return axios({
    method: 'get',
    baseURL: 'http://localhost:3001',
    url: '/transactions'
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(listTransaction);

    if (response.error) throw response.error

    // dispatch a success action to the store with the list of transactions
    yield put({
        type: actions.LIST_TRANSACTION_SUCCESS,
        response
    })

  } catch (error) {
      yield put({
          type: actions.LIST_TRANSACTION_FAILURE,
          error
      })
  }
}
