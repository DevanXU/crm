import React from 'react';

export default class CustomerCreate extends React.Component {
    componentDidMount = () => {
        console.log('CustomerCreate props:', this.props);
    }

    render() {
        return (
            <div>
                Customer Create
            </div>
        );
    }
}
