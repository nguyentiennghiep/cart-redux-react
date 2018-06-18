import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.subTotal(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) =>{
        var result = '';
        if(cart)
        {
            result = cart.map((item,index)=>{
               return  <CartItem key = {index} cartItem = {item} />
            })
        }
        return result;
    }

    subTotal = (cart) =>{
        var result = 0;
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

    });
}

export default connect(mapStatetoProps, mapDispatchToProps)(CartContainer);

