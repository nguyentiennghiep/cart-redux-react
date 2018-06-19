import * as types from '../constants/ActionTypes';

export const actAddToCart = (product,amount) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        amount
    }
}

export const changeMess = (mess) =>{
    return {
        type : types.CHANGE_MESS,
        mess
    }
}

export const deleteCart = (product) =>{
    return {
        type : types.DELETE_CART,
        product
    }
}

export const minusProduct = (product) =>{
    return {
        type : types.MINUS_PRODUCT,
        product
    }
}


export const plusProduct = (product) =>{
    return {
        type : types.PLUS_PRODUCT,
        product
    }
}