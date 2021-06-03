//Types
import {
    SET_WISH_LIST
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
