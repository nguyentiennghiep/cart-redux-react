import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as message from './../constants/messages';
import * as actions from './../actions/index'

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.subTotal(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) =>{
        var result = "" ;
        if(cart)
        {
            result = cart.map((item,index)=>{
               return  <CartItem key = {index} cartItem = {item} onDelete = {this.props.onDelete}
               onChangeMess = {this.props.onChangeMess}
               minusProduct = {this.props.minusProduct}
               plusProduct = {this.props.plusProduct} />
            })
        }
        return result;
    }

    subTotal = (cart) =>{
        var result = <tr><td>{message.MSG_NO_CART}</td></tr>;
        if(cart.length > 0)
        {
            result =<CartResult cart = {cart} />;
        }
        return result
    }
}

CartContainer.propType = {
    cart: PropTypes.arrayOf(
        PropTypes.shape(
            {
                product: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    img: PropTypes.string,
                    price: PropTypes.number,
                    inventory: PropTypes.number,
                    rate: PropTypes.number,
                }),
                amout: PropTypes.number
            }
        )).isRequired
}

const mapStatetoProps = state => {
    return ({
        cart: state.cart
    });
}

const mapDispatchToProps = (dispatch, props) => {
    return ({
        onDelete : (product) =>{
            dispatch(actions.deleteCart(product))
        }
        ,
        onChangeMess: (mess) => {
            dispatch(actions.changeMess(mess))
        },
        minusProduct : (product) =>{
            dispatch(actions.minusProduct(product))
        },
        plusProduct : (product) =>{
            dispatch(actions.plusProduct(product))
        }
    });
}

export default connect(mapStatetoProps, mapDispatchToProps)(CartContainer);

