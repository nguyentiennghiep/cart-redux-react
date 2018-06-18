import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';

class Products extends Component {
    render() {
        var {products} = this.props;
        var elemPro = products.map((product , index) => {
            return <Product key = {index} 
            name = {product.name} 
            img = {product.img} 
            desc = {product.description} 
            price = {product.price}
            rates = {product.rate}
            />
        })
        return (
            <section className="section">
                <h1 className="section-heading">List all products</h1>
                <div className="row">
                    {elemPro}
                </div>
            </section>
        );
    }
}

const mapStatetoProps = state =>{
    return ({
        products : state.products
    });
}

const mapDispatchToProps = (dispatch,props) =>
{
    return ({
        
    });
}

export default connect(mapStatetoProps,mapDispatchToProps)(Products);

