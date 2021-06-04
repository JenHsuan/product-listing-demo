//Types
import {
    SET_WISH_LIST,
    SET_WISH_LIST_MODAL
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
        case SET_WISH_LIST_MODAL:
             return {
                ...state,
                showWishListModal: action.payload.showWishListModal
            };
        default:
            return state;
    }
};
