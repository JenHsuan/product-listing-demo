import React from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    selectWishList,
    selectShowWishListModal
} from "./states/states";

import {
    setWishList,
    setWishListModal,
} from "./actions/action";

import {
    WishListBtnStyle
} from './styles/Style';

const WishListButton = () => {
    const wishList = useSelector(selectWishList);
    const showWishListModal = useSelector(selectShowWishListModal);
    const dispatch = useDispatch();

    return (
        <WishListBtnStyle variant='major'>
        <button onClick={() => {
            if (showWishListModal) {
                dispatch(setWishListModal(false));
            } else {
                dispatch(setWishListModal(true));
            }
        }}>
            {wishList.length} products in Wishlist
        </button>
        </WishListBtnStyle>
    )
}

export default WishListButton;
