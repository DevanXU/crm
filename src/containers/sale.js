import React, { Component } from 'react'
import { fetchUsers } from '../actions/userAction'
import { connect } from 'react-redux'
import './sale.css'

export class Sale extends Component {
    render() {
        const users = this.props.user.users.map(user => (
            <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Compnay:</p>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
                <hr />
            </div>
        ));
        return (
            <div>
                <button onClick={() => this.props.fetchUsers()}>Trigger</button>
                <div className='Users'>
                    <p>{this.props.user.users.length} users</p>
                    {users}
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sale)
