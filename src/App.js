// in src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import { CoreApp } from './core';
import { CustomerList } from './customers';

export default class App extends React.Component {
    render() {
        return (
            <CoreApp title='CRM'>
                <Route exact path='/customer' component={CustomerList} />
            </CoreApp>
        );
    }
}