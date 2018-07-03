// in src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import { CoreApp } from './core';
import { Home } from './home';
import { CustomerList } from './customers';

export default class App extends React.Component {
    render() {
        return (
            <CoreApp title='CRM'>
                <Route exact path='/' component={Home} />
                <Route exact path='/customer' component={CustomerList} />
            </CoreApp>
        );
    }
}