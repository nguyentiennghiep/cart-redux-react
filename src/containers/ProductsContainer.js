import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import * as actions from './../actions/index'

class ProductsContainer extends Component {

    showProduct = (products) => {
        var result = '';
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} 
                onAddToCart = {this.props.onAddToCart}
                onChangeMess = {this.props.onChangeMess}></Product>
            })
        }
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
}

ProductsContainer.propType = {
    products :　PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number,
            name : PropTypes.string,
            img : PropTypes.string,
            price : PropTypes.number,
            inventory : PropTypes.number,
            rate : PropTypes.number,
        })
    ).isRequired
}

const mapStatetoProps = state => {
    return ({
        products: state.products
    });
}

const mapDispatchToProps = (dispatch, props) => {
    return ({
        onAddToCart : (product) =>{
            dispatch(actions.actAddToCart(product,1))
        },
        onChangeMess : (mess) =>{
            dispatch(actions.changeMess(mess))
        }
    });
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer);

