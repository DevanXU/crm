import React from 'react';
import { Route } from 'react-router-dom';
import { CoreApp } from './core';
import { Home } from './home';
import { Switch } from 'react-router-dom';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {
    CustomerList,
    CustomerCreate,
    CustomerEdit,
    CustomerShow
} from './customers';
import { SaleList, SaleCreate } from './sales';

import classnames from 'classnames';

const Layout = ({
    children,
    classes,
    className,
    customRoutes,
    dashboard,
    logout,
    menu,
    open,
    title,
    ...props
}) => (
        <div
        // className={classnames('layout', classes.root, className)}
        // {...sanitizeRestProps(props)}
        >
            {children}
        </div>
    );

export default class App extends React.Component {
    render() {
        return (
            // <CoreApp title='CRM'>
            //     <Switch>
            //         <Route exact path='/' component={Home} />
            //         <Route exact path="/customers" hasCreate={true} render={(routeProps) => <CustomerList resource="users" {...routeProps} />} />
            //         <Route exact path="/customers/create" render={(routeProps) => <CustomerCreate resource="users" {...routeProps} />} />
            //         <Route exact path="/customers/:id" hasShow={true} render={(routeProps) => <CustomerEdit resource="users" {...routeProps} />} />
            //         <Route exact path="/customers/:id/show" hasEdit={true} render={(routeProps) => <CustomerShow resource="users" {...routeProps} />} />
            //     </Switch>
            // </CoreApp>

            <Admin
                title='CRM'
                dataProvider={jsonServerProvider('http://localhost:3001')}
                dashboard={Home}
                appLayout={Layout}
            >
                <Resource name="users"
                    list={CustomerList}
                    create={CustomerCreate}
                    edit={CustomerEdit}
                    show={CustomerShow}
                />
                <Resource name="comments"
                    list={SaleList}
                    create={SaleCreate}
                />
            </Admin>
        );
    }
}