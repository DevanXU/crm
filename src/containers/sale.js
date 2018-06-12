import React, { Component } from 'react'
import { updateSaleNumber } from '../actions/saleAction'
import { connect } from 'react-redux'

export class Sale extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.updateSale(10)}>{this.props.sale.number}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sale: state.saleReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSale: (number) => dispatch(updateSaleNumber(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)
