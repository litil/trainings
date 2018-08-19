import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Transaction extends Component {
    static propTypes = {
        /** Label, open text */
        label: PropTypes.string.isRequired,
        /** Category, enum */
        category: PropTypes.oneOf(['Food', 'Home']).isRequired,
        /** Category, enum */
        subCategory: PropTypes.oneOf(['Restaurant', 'Groceries', 'Rent', 'Furniture']).isRequired,
        /** Price, enum */
        price: PropTypes.number.isRequired
    }

    render() {
        const { label, category, subCategory, price } = this.props

        const displayCategory = subCategory || category

        return <div>
            <div>{label}</div>
            <div>{displayCategory}</div>
            <div>{price}</div>
        </div>
    }
}

export default Transaction;
