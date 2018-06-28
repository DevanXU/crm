import React from 'react';
import { Admin, Resource } from 'react-admin';

const CustomerList = () => (
    <div>Customer List</div>
)

const CustomerEdit = () => (
    <div>Customer Edit</div>
)

const CustomerCreate = () => (
    <div>Customer Create</div>
)

export default class Customers extends React.Component {
    render() {
        return (
            <Resource
                name='Customers'
                list={CustomerList}
                edit={CustomerEdit}
                create={CustomerCreate}
            />
        );
    }
}