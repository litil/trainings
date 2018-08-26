import React, {Component} from 'react'
import PropTypes from 'prop-types'

import AddTransactionForm from '../../organisms/AddTransactionFrom';
import PageTitle from '../../elements/PageTitle';

import './styles.css';

class AddTransactionPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="AddTransactionPage-container">
            <PageTitle title="Add Transaction" />
            <AddTransactionForm />
        </div>
    }
}

export default AddTransactionPage;
