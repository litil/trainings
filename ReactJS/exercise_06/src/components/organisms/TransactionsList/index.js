import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Transaction from '../../molecules/Transaction';

class TransactionsList extends Component {
    static propTypes = {
        /** List of transactions, grouped by date  */
        dailyTransactions: PropTypes.object.isRequired
    }

    render() {
        const { dailyTransactions } = this.props

        if (!dailyTransactions) return 'No transactions yet'

        return r = <div>
            { Object.entries(dailyTransactions).map(([date, transactionsArray]) => {
                return <div key={`transaction-group-${date}`}>
                    <div>{ date }</div>
                    { transactionsArray.map((t, i) => {
                        return <Transaction {...t} key={`transaction-${i}`} />
                    })}
                </div>
            })}
        </div>
    }
}

export default TransactionsList;
