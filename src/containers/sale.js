import React, { Component } from 'react'
import { updateSaleNumber } from '../actions/saleAction'
import { fetchPosts } from '../actions/customerAction'
import { connect } from 'react-redux'

export class Sale extends Component {
    render() {
        const users = this.props.customer.users.map(user => (
            <div key={user.id}>
                <p>{user.body}</p>
            </div>
        ));
        return (
            <div>
                <button onClick={() => this.props.fetchPosts()}>{this.props.sale.number}</button>
                <div>
                    {users}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer,
        sale: state.sale
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSale: (number) => dispatch(updateSaleNumber(number)),
        fetchPosts: () => dispatch(fetchPosts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sale)
