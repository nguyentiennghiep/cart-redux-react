import * as types from './../constants/ActionTypes';
import * as message from './../constants/messages'

var initialState = message.MESS_WC;

const messReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESS:
            {
                return action.mess;
            }
        default: return state;
    }

}

export default messReducer;
