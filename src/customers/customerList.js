import React from 'react';
import {
    List,
    SimpleList
} from 'react-admin';

export default class CustomerList extends React.Component {
    render() {
        return (
            <List
                // filters=''
                // sort=''
                {...this.props}
            >
                <SimpleList
                    primaryText={record => record.name}
                />
            </List>
        );
    }
}
