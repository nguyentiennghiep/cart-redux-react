import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        var {cart} = this.props;
        return (
            <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Sum Price</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{this.subTotal(cart)}$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
        );
    }
    subTotal =(cart) =>
    {
        var total = 0;
        cart.forEach(item => {
            total = total + item.product.price * item.amount
        });
        return total;
    }
}

export default CartResult;
