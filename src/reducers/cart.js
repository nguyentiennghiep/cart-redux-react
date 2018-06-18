import * as types from './../constants/ActionTypes';

var initialState = [
    {
        product: {
            id: 3,
            name: 'Oppo',
            img: "https://cdn.didongthongminh.vn/upload_images/2017/10/oppo-f1-gold.png",
            description: 'Made by China',
            price: 400,
            inventory: 10,
            rate: 1
        },
        amount: 2
    }
];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            {
                console.log(action)
                return [...state];
            }
        default: return [...state];
    }

}

export default cartReducer;
