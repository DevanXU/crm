import React from 'react'
import { Admin, Resource } from 'react-admin'
import { List, GridList } from 'antd-mobile'
import jsonServerProvider from 'ra-data-json-server'

const Home = () => {
  return (<div>Home</div>)
}

const CustomerList = () => (
  <List>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 1</List.Item>
  </List>
)

const CustomerEdit = () => {
  return (<div>Customer Edit</div>);
}

export default class App extends React.Component {
  render() {
    return (
      <Admin
        title='CRM'
        dataProvider={jsonServerProvider('http://localhost:3001')}
        dashboard={Home}
      >
        <Resource
          name='Customers'
          list={CustomerList}
          edit={CustomerEdit}
        />
      </Admin>
    );
  }
}