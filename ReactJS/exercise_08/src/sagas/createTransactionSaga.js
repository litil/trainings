import { takeLatest, call, put } from "redux-saga/effects"
import * as actions from '../actions/actionTypes.js'
import axios from "axios"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* createTransactionWatcherSaga() {
  yield takeLatest("CREATE_TRANSACTION_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function createTransaction(transaction) {
  return axios({
    method: 'post',
    baseURL: 'http://localhost:3001',
    url: '/transactions',
    headers: { 'content-type': 'application/json' },
    data: {
        "label": transaction.name,
        "category": transaction.category,
        "subCategory": transaction.subCategory,
        "price": transaction.amount,
        "date": transaction.date
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(createTransaction, action.transaction);

    if (response.error) throw response.error

    // dispatch a success action to the store with the new transaction
    yield put({
        type: actions.CREATE_TRANSACTION_SUCCESS,
        response
    })
    yield put({
        type: actions.LIST_TRANSACTION_REQUEST
    })

  } catch (error) {
      yield put({
          type: actions.CREATE_TRANSACTION_FAILURE,
          error
      })
  }
}
