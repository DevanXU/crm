import React, { Component } from 'react'
import { updateSaleNumber } from '../actions/saleAction'
import { fetchPosts } from '../actions/customerAction'
import { connect } from 'react-redux'
import './sale.css'

export class Sale extends Component {
    render() {
        const users = this.props.customer.users.map(user => (
            <div key={user.id}>
                <p>{user.title}</p>
                <p>{user.body}</p>
            </div>
        ));
        return (
            <div>
                <button onClick={() => this.props.fetchPosts()} />
                <div className='Users'>
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
