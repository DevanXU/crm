import React from 'react';

export default class CustomerShow extends React.Component {
    componentDidMount = () => {
        console.log('CustomerShow props:', this.props);
    }

    render() {
        return (
            <div>
                Customer Show
            </div>
        );
    }
}
