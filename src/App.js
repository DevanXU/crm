import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import { CustomerList } from './customers';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch className="App">
            <Route exact path='/' component={Home} />
            <Route exact path='/customer' component={CustomerList} />
          </Switch>
        </Provider>
      </BrowserRouter >
    );
  }
}

export default App;
