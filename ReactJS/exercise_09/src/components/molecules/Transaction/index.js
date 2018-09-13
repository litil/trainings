import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './styles.css';

class Transaction extends Component {
    static propTypes = {
        /** Label, open text */
        label: PropTypes.string.isRequired,
        /** Category, enum */
        category: PropTypes.oneOf(['Food', 'Home']).isRequired,
        /** Category, enum */
        subCategory: PropTypes.oneOf(['Restaurant', 'Groceries', 'Rent', 'Furniture']).isRequired,
        /** Price, enum */
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }

    render() {
        const { label, category, subCategory, price } = this.props

        const displayCategory = subCategory || category

        return <div className="Transaction-container">
            <div className="Transaction-left">
                <div className="Transaction-icon"> {category[0].toUpperCase() }</div>
                <div className="Transaction-identifier">
                    <div className="Transaction-label">{label}</div>
                    <div className="Transaction-subCategory">{displayCategory}</div>
                </div>
            </div>
            <div className="Transaction-price">{price}</div>
        </div>
    }
}

export default Transaction;
