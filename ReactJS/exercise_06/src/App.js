import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionsList from './components/organisms/TransactionsList';

const transactions = {
    "01-09-2018": [{
        "label": "Diner @ Livio",
        "category": "Food",
        "subCategory": "Restaurant",
        "price": 27.6
    }, {
        "label": "Weekly groceries Monop'",
        "category": "Food",
        "subCategory": "Groceries",
        "price": 54.81
    }],
    "03-09-2018": [{
        "label": "Date @ Mio Posto",
        "category": "Food",
        "subCategory": "Restaurant",
        "price": 78.47
    }, {
        "label": "Daily groceries M&S'",
        "category": "Food",
        "subCategory": "Groceries",
        "price": 14.39
    }],
    "04-09-2018": [{
        "label": "Rent September",
        "category": "Home",
        "subCategory": "Rent",
        "price": 1715.30
    }],
    "07-09-2018": [{
        "label": "New bed mattress",
        "category": "Home",
        "subCategory": "Furniture",
        "price": 349.99
    }],
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TransactionsList dailyTransactions={transactions} />

      </div>
    );
  }
}

export default App;
