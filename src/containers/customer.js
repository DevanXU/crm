import React from "react";
import { connect } from 'react-redux'
import { setName } from '../actions/customerAction'

class CustomerList extends React.Component {
    render() {
        return (
            <div>
                <h3>CustomerList</h3>
                <button onClick={() => this.props.setName('Welcome')}>{this.props.customer.name}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customer: state.customerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch(setName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)