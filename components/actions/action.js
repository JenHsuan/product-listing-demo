//Types
import {
    SET_WISH_LIST,
    SET_WISH_LIST_MODAL
} from '../types';

//Actions

export const setWishList = (list) => ({
        type: SET_WISH_LIST,
        payload: {
            wishList: list
        }
    });


export const setWishListModal = (show) => ({
        type: SET_WISH_LIST_MODAL,
        payload: {
            showWishListModal: show
        }
    });
