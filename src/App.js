import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import store from './store'
import Home from './components/home'
import CusotmerList from './containers/customer'
import Sale from './containers/sale'
import TabBarExample from './components/tabbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <div className="App">
              <Route exact path='/' component={Home} />
              <Route path='/sale' component={Sale} />
              <Route path='/customer' component={CusotmerList} />
            </div>
          </div>
        </Provider>
      </BrowserRouter >
    );
  }
}

export default App;
