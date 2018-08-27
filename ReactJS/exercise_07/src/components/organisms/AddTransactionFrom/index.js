import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './styles.css';

class AddTransactionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date: '',
            amount: '',
            category: '',
            subCategory: ''
        }
    }

    handleChange = (key) => (event) => {
        this.setState({ [key]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { ...transaction } = this.state
        this.props.createTransaction(transaction)
    }

    handleReset = (event) => {
        event.preventDefault();
        this.setState({ name: '', date: '', amount: '', category: '', subCategory: ''})
    }

    render() {
        const { name, date, amount, category, subCategory } = this.state

        return <div className="TransactionForm-container">
            <form className="TransactionForm-form">
                <label className="TransactionForm-label">
                    <div className="TransactionForm-icon">L</div>
                    <input
                        className="TransactionForm-input"
                        type="text"
                        name="label"
                        value={name}
                        placeholder="Transaction's name"
                        onChange={this.handleChange('name')} />
                </label>
                <label className="TransactionForm-label">
                    <div className="TransactionForm-icon">D</div>
                    <input
                        className="TransactionForm-input"
                        type="text"
                        name="date"
                        value={date}
                        placeholder="Transaction date"
                        onChange={this.handleChange('date')} />
                </label>
                <label className="TransactionForm-label">
                    <div className="TransactionForm-icon">A</div>
                    <input
                        className="TransactionForm-input"
                        type="text"
                        name="amount"
                        value={amount}
                        placeholder="Amount"
                        onChange={this.handleChange('amount')} />
                </label>
                <label className="TransactionForm-label">
                    <div className="TransactionForm-icon">C</div>
                    <input
                        className="TransactionForm-input"
                        type="text"
                        name="category"
                        value={category}
                        placeholder="Category"
                        onChange={this.handleChange('category')} />
                </label>
                <label className="TransactionForm-label">
                    <div className="TransactionForm-icon">S</div>
                    <input
                        className="TransactionForm-input"
                        type="text"
                        name="subCategory"
                        value={subCategory}
                        placeholder="Sub category"
                        onChange={this.handleChange('subCategory')} />
                </label>
                <div className="TransactionForm-buttons">
                    <input className="TransactionForm-reset" type="submit" value="Reset"
                        onClick={this.handleReset} />
                    <input className="TransactionForm-submit" type="submit" value="Submit"
                        onClick={this.handleSubmit} />
                </div>
            </form>
        </div>
    }
}

export default AddTransactionForm;
