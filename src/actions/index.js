import * as types from '../constants/ActionTypes';

export const actAddToCart = (product,amount) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        amount
    }
}