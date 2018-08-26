import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Transaction from '../../molecules/Transaction';

import './styles.css';

class TransactionsList extends Component {
    static propTypes = {
        /** List of transactions, grouped by date  */
        dailyTransactions: PropTypes.object.isRequired
    }

    render() {
        const { dailyTransactions } = this.props

        if (!dailyTransactions) return 'No transactions yet'

        return <div className="TransactionList-container">
            { Object.entries(dailyTransactions).map(([date, transactionsArray]) => {
                return <div className="TransactionList-row"
                        key={`transaction-group-${date}`}>
                    <div className="TransactionList-date">{ date }</div>
                    { transactionsArray.map((t, i) => {
                        return <Transaction {...t} key={`transaction-${i}`} />
                    })}
                </div>
            })}
        </div>
    }
}

export default TransactionsList;
