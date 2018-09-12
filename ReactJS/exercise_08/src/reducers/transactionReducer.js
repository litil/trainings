import * as actionTypes from '../actions/actionTypes'

/**
 * Initial state.
 * Each object to handle must have a isWorking and a data attributes.
 */
const initialState = {
    isWorking: false,
    data: {
        "01-09-2018": [
            {
                "label": "Diner @ Livio",
                "category": "Food",
                "subCategory": "Restaurant",
                "price": 27.6
            }, {
                "label": "Weekly groceries Monop'",
                "category": "Food",
                "subCategory": "Groceries",
                "price": 54.81
            }
        ],
        "03-09-2018": [
            {
                "label": "Date @ Mio Posto",
                "category": "Food",
                "subCategory": "Restaurant",
                "price": 78.47
            }, {
                "label": "Daily groceries M&S'",
                "category": "Food",
                "subCategory": "Groceries",
                "price": 14.39
            }
        ],
        "04-09-2018": [
            {
                "label": "Rent September",
                "category": "Home",
                "subCategory": "Rent",
                "price": 1715.30
            }
        ],
        "07-09-2018": [
            {
                "label": "New bed mattress",
                "category": "Home",
                "subCategory": "Furniture",
                "price": 349.99
            }
        ]
    }
}

/**
 * This method handles the createTransaction actions. It returns an object which will
 * be set in the data entry of the reducer.
 */
const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TRANSACTION_REQUEST: {
            const transaction = action.transaction
            let data = state.data
            data[transaction.date] = [{
                "label": transaction.name,
                "category": transaction.category,
                "subCategory": transaction.subCategory,
                "price": Number(transaction.amount)
            }]

            return {
                ...state,
                data,
                isWorking: true
            }
        }
        case actionTypes.CREATE_TRANSACTION_SUCCESS: {
            // formatting received response
            const data = action.response.results

            return {
                ...state,
                isWorking: false,
                data,
                lastUpdated: action.receivedAt
            }
        }
        case actionTypes.CREATE_TRANSACTION_FAILURE: {
            return {
                ...state,
                isWorking: false,
                data: undefined,
                lastUpdated: action.receivedAt
            }
        }
        default:
            return state
    }
}
export default transactionReducer;
