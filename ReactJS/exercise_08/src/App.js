import React, {Component} from 'react';
import './App.css';
import AddTransactionPage from './components/pages/AddTransactionPage';
import TransactionsListPage from './components/pages/TransactionsListPage';
import Header from './components/organisms/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <div className="App-container">
                    <AddTransactionPage />
                    <TransactionsListPage />
                </div>
            </div>
        );
    }
}

export default App;
