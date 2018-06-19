import * as types from './../constants/ActionTypes';


var data = JSON.parse(localStorage.getItem('carts'));
var initialState = data ? data : [];
var index = -1;

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            {
                index = findIndex(state, action.product)

                if (index !== -1) {
                    state[index].amount++;
                }
                else {
                    state.push({
                        product: action.product,
                        amount: 1
                    });
                }
                localStorage.setItem('carts', JSON.stringify(state))

                return [...state];
            }
        case types.DELETE_CART: {
            index = findIndex(state, action.product)
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('carts', JSON.stringify(state));

            return [...state];
        }
        case types.MINUS_PRODUCT: {
            index = findIndex(state, action.product)
            if (index !== -1) {
                state[index].amount--;
                if(state[index].amount === 0)
                {
                    state.splice(index, 1);
                }
            }
            localStorage.setItem('carts', JSON.stringify(state));

            return [...state];
        }
        case types.PLUS_PRODUCT: {
            index = findIndex(state, action.product)
            if (index !== -1) {
                state[index].amount++;
            }
            localStorage.setItem('carts', JSON.stringify(state));

            return [...state];
        }
        default: return [...state];
    }

}

var findIndex = (state, product) => {
    var result = -1;
    state.forEach((item, index) => {
        if (item.product.id === product.id) {
            result = index;
        }
    });
    return result;
}

export default cartReducer;
