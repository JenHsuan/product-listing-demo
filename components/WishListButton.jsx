import React from 'react';

import {
    useSelector
} from "react-redux";

import {
    selectWishList
} from "./states/states";


const WishListButton = () => {
    const wishList = useSelector(selectWishList);
    return (
        <button>
            {wishList.length} products in Wishlist
        </button>
    )
}

export default WishListButton;
