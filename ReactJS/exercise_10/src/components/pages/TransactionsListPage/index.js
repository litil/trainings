import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import TransactionsList from '../../organisms/TransactionsList';
import PageTitle from '../../elements/PageTitle';

import { listTransactionsRequest } from '../../../actions/listTransactionsAction'

import './styles.css';

class TransactionsListPage extends Component {
    static propTypes = {
        /** Transaction data */
        data: PropTypes.object,
        /** Function performing an API call to list the transactions */
        listTransactions: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        const { listTransactions } = this.props
        listTransactions()
    }

    render() {
        const { data } = this.props

        return <div className="TransactionsListPage-container">
            <PageTitle title="Transactions List" />
            <TransactionsList dailyTransactions={data}/>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        listTransactions: () => dispatch(listTransactionsRequest())
    })
}

const mapStateToProps = state => {
    const { transactionReducer } = state

    const data = transactionReducer ? transactionReducer.data : {}
    const isWorking = transactionReducer ? transactionReducer.isWorking : false

    return { data, isWorking }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListPage)
