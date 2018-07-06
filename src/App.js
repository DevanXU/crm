import React from 'react';
import { Home } from './home';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {
    CustomerList,
    CustomerCreate,
    CustomerEdit,
    CustomerShow
} from './customers';

import {
    UserList,
    UserCreate,
    UserEdit,
    UserShow,
} from './users';

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
        <div>
            {children}
        </div>
    );

export default class App extends React.Component {
    render() {
        return (
            <Admin
                title='CRM'
                dataProvider={jsonServerProvider('http://localhost:3001')}
                dashboard={Home}
                appLayout={Layout}
            >
                <Resource name="customers"
                    list={CustomerList}
                    create={CustomerCreate}
                    edit={CustomerEdit}
                    show={CustomerShow}
                />
                <Resource name="users"
                    list={UserList}
                    create={UserCreate}
                    edit={UserEdit}
                    show={UserShow}
                />
            </Admin>
        );
    }
}