import React, { Component } from 'react';
import CartResult from './CartResult';

class Cart extends Component {
    render() {
        return (
            <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Sum</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                        <CartResult/>
                    </tbody>
                </table>
            </div>
        </section>
        );
    }
}

export default Cart;
