import React, {Component} from 'react';
import './App.css';
import AddTransactionPage from './components/pages/AddTransactionPage';
import TransactionsListPage from './components/pages/TransactionsListPage';
import Header from './components/organisms/Header';
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-container">
                    <div className="App-navigation">
                        <nav>
                            <ul>
                              <li><NavLink to='/' className="App-navigation-link">Home</NavLink></li>
                              <li><NavLink to='/add' className="App-navigation-link">Add Transaction</NavLink></li>
                            </ul>
                          </nav>
                    </div>
                    <div className="App-page-container">
                        <Switch>
                            <Route exact path='/' component={TransactionsListPage}></Route>
                            <Route exact path='/add' component={AddTransactionPage}></Route>
                          </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
