//Types
import {
    SET_WISH_LIST,
    SET_WISH_LIST_MODAL
} from '../types';

//Actions

export const setWishList = (list) => dispatch => {
    try {
        dispatch({
            type: SET_WISH_LIST,
            payload: {
                wishList: list
            }
        });
    } catch (error) {
        console.log(error);
    }
};


export const setWishListModal = (show) => dispatch => {
    try {
        dispatch({
            type: SET_WISH_LIST_MODAL,
            payload: {
                showWishListModal: show
            }
        });
    } catch (error) {
        console.log(error);
    }
};
