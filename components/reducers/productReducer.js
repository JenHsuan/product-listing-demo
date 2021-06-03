//Types
import {
    SET_WISH_LIST
} from '../types';

//States
import {
    initialState,
} from '../states/states';

//Reducer
export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WISH_LIST:
             return {
                ...state,
                wishList: action.payload.wishList
            };
        default:
            return state;
    }
};
