import React, { Component } from 'react';
import {
    List,
    SimpleList
} from 'react-admin';

export default class UserList extends Component {
    render() {
        return (
            <List
                title='User List'
                {...this.props}
            >
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    linkType='show'
                />
            </List>
        );
    }
}