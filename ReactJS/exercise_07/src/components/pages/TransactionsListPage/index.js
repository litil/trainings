import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import TransactionsList from '../../organisms/TransactionsList';
import PageTitle from '../../elements/PageTitle';

import './styles.css';

class TransactionsListPage extends Component {
    constructor(props) {
        super(props)
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

    })
}

const mapStateToProps = state => {
    const { createTransactionReducer } = state

    const data = createTransactionReducer ? createTransactionReducer.data : {}
    const isWorking = createTransactionReducer ? createTransactionReducer.isWorking : false

    return { data, isWorking }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListPage)
