import React from 'react';
import {
    List,
    SimpleList
} from 'react-admin';

export class SaleList extends React.Component {
    render() {
        return (
            <List
                {...this.props}
            >
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                />
            </List>
        );
    }
}

export class SaleCreate extends React.Component {
    render() {
        return (
            <div>Sale Create</div>
        )
    }
}