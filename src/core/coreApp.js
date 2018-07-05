import React from 'react';
import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import createHistory from 'history/createHashHistory';
import { reducer as formReducer } from 'redux-form';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { combineReducers } from 'redux';
import simpleRestProvider from 'ra-data-simple-rest';
import defaultMessages from '../i18n/en';
import {
    adminReducer,
    i18nReducer,
    adminSaga,
    TranslationProvider,
} from 'react-admin';

const messages = {
    fr: () => import('../i18n/fr.js').then(messages => messages.default),
    en: () => import('../i18n/en.js').then(messages => messages.default),
};

export const CoreApp = ({
    children,
}) => {
    // console.log('children: ', children);
    const initialState = {};

    /* create a Redux app
    */
    const reducer = combineReducers({
        admin: adminReducer,
        i18n: i18nReducer('en', messages['en']),
        form: formReducer,
        routing: routerReducer,
    });
    const sagaMiddleware = createSagaMiddleware();
    const history = createHistory();
    const middleware = [
        sagaMiddleware,
        routerMiddleware(history),
        logger,
    ];

    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f, )
    );

    /* side effects
    */
    const dataProvider = simpleRestProvider('http://jsonplaceholder.typicode.com');
    const authProvider = () => Promise.resolve();
    const i18nProvider = locale => {
        if (locale !== 'en') {
            return messages[locale];
        }
        return defaultMessages;
    };
    sagaMiddleware.run(adminSaga(dataProvider, authProvider, i18nProvider));

    /* bootstrap redux and the routes
    */
    return (
        <Provider store={store}>
            <TranslationProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </TranslationProvider>
        </Provider>
    );
}

CoreApp.propTypes = {
    children: PropTypes.oneOfType(PropTypes.node, PropTypes.func),
}