import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './styles.css';

class PageTitle extends Component {
    static propTypes = {
        /** The page title */
        title: PropTypes.string.isRequired
    }

    render() {
        const { title } = this.props

        return <div className="PageTitle-container">
            <h1>{title}</h1>
        </div>
    }
}

export default PageTitle;
