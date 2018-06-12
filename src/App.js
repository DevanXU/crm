import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import CustomerList from './containers/customer'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App"><CustomerList /></div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
