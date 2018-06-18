import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';

class ProductsContainer extends Component {

    showProduct = (products) => {
        var result = '';
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product}></Product>
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


const mapStatetoProps = state => {
    return ({
        products: state.products
    });
}

const mapDispatchToProps = (dispatch, props) => {
    return ({

    });
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer);

