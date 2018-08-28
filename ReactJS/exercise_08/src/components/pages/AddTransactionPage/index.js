import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import { createTransactionRequest } from '../../../actions/createTransactionAction'

import AddTransactionForm from '../../organisms/AddTransactionFrom';
import PageTitle from '../../elements/PageTitle';

import './styles.css';

class AddTransactionPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { createTransaction } = this.props

        return <div className="AddTransactionPage-container">
            <PageTitle title="Add Transaction" />
            <AddTransactionForm createTransaction={createTransaction}/>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        createTransaction: (transaction) => dispatch(createTransactionRequest(transaction))
    })
}

const mapStateToProps = state => {
    const { createTransactionReducer } = state

    const data = createTransactionReducer ? createTransactionReducer.data : {}
    const isWorking = createTransactionReducer ? createTransactionReducer.isWorking : false

    return { data, isWorking }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionPage)
