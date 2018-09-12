import React, {Component} from 'react'
import otter from '../../../assets/otter.svg';

import './styles.css';

class Header extends Component {

    render() {
        return <header className="header">
            <div className="logo-container">
                <img src={otter} className="logo" alt="logo"/>
                <h1 className="title">Otto The Otter</h1>
            </div>
        </header>
    }
}

export default Header;
