import * as actionTypes from './actionTypes'

export const createTransactionRequest = (transaction) => ({
    type: actionTypes.CREATE_TRANSACTION_REQUEST,
    transaction
})
