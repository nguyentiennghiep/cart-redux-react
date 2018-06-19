import React, { Component } from 'react';
import * as message from './../constants/messages'

class CartItem extends Component {
    subTotal = (price , amount) => {
        return price * amount;
    }

    onDelete=()=>{
        this.props.onDelete(this.props.cartItem.product);
        this.props.onChangeMess(message.MSG_DELETE_SUCCESS);
        }

    minusProduct = () =>{
        this.props.minusProduct(this.props.cartItem.product);
    }

    plusProduct = () =>{
        this.props.plusProduct(this.props.cartItem.product);
    }

    render() {
        var {cartItem} = this.props;
        return (
            
            <tr>
            <th scope="row">
                <img src={cartItem.product.img}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{cartItem.product.name}</strong>
                </h5>
            </td>
            <td>{cartItem.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{cartItem.amount} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick = {this.minusProduct}>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick = {this.plusProduct}>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.subTotal(cartItem.product.price,cartItem.amount)}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick = {this.onDelete}>
                    X
                </button>
            </td>
        </tr>
        );
    }
    
    
}



export default CartItem;
