import React from 'react';
import {
    List,
    SimpleList
} from 'react-admin';

export default class CustomerList extends React.Component {
    componentDidMount = () => {
        console.log('CustomerList props:', this.props);
    }

    render() {
        return (
            <List
                // filters=''
                // sort=''
                title='Customer List'
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
