import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TransactionsList from '../../organisms/TransactionsList';
import PageTitle from '../../elements/PageTitle';

import './styles.css';

class TransactionsListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            transactions: {
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
    }

    render() {
        const { transactions } = this.state

        return <div className="TransactionsListPage-container">
            <PageTitle title="Transactions List" />
            <TransactionsList dailyTransactions={transactions}/>
        </div>
    }
}

export default TransactionsListPage;
