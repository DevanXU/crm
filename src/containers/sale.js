import React, { Component } from 'react'
import { fetchUsers, fetchTodos } from '../actions/userAction'
import { connect } from 'react-redux'
import Navigator from '../components/navigator'
import './sale.css'

export class Sale extends Component {
    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchTodos()
    }

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
        ))

        const todos = this.props.user.todos.map(todo => (
            <div key={todo.id}>
                <p><input type='checkbox' defaultChecked={todo.completed} />{todo.title}</p>
                {/* <p><input type='checkbox' /></p> */}
                {/* <p>{todo.title}</p> */}
            </div>
        ))

        return (
            <div>
                <div>
                    <Navigator name="跟进记录" />
                </div>
                <div>
                    {/* <button onClick={() => this.props.fetchUsers()}>Users</button>
                <br />
                <button onClick={() => this.props.fetchTodos()}>Todos</button>
                <br />
                <button onClick={() => this.props.fetchPhotos()}>Photos</button> */}
                    <div className='Users'>
                        <p>{this.props.user.users.length} Users</p>
                        {users}
                    </div>
                    <div className='Todos'>
                        <p>{this.props.user.todos.length} Todos</p>
                        {todos}
                    </div>
                    {/* <div className='Photos'>
                    <p>{this.props.user.photos.length} users</p>
                    {photos}
                </div> */}
                </div >
            </div>
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
        fetchTodos: () => dispatch(fetchTodos()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sale)
