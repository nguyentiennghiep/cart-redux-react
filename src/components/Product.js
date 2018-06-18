import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from './../actions/ActionTypes'

class Product extends Component {
    showRate  = ( rates) =>{
       var result = [];
       for(var i = 1; i<= rates ; i++)
       {
           result.push(<i  key = {i}className = "fa fa-star"></i>);
       }
       for(var j = 1; j<= 5-rates ; j++)
       {
           result.push(<i key = {i+j} className = "fa fa-star-o"></i>);
       }
       return result;
    }
    render() {
        var {product} = this.props;
        console.log(product);
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img}
                            className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>{this.showRate(product.rates)}</li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Product);
