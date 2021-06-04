import React from 'react';

import {
    WishListModalStyle
} from './styles/Style';

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

const WishListModal = () => {
    const wishList = useSelector(selectWishList);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        let oldWishList = Array.from(wishList);
        dispatch(setWishList(oldWishList.filter(ele => ele.id !== id)))
    };

    return (
        <>
        {wishList.length === 0 ? (
            <WishListModalStyle variant="empty">
                <button className='close-btn' onClick={() => {
                    dispatch(setWishListModal(false));
                        }}>X
                </button>
                <div className='empty-remind'>
                    You don't have items in the wish list!
                </div>
            </WishListModalStyle>
        ): (
            <WishListModalStyle variant="major">
                <button className='close-btn' onClick={() => {
                    dispatch(setWishListModal(false));
                        }}>X
                </button>
                <div className="modal-title">Wish List</div>
                    <div className="wish-list-table">
                        {wishList.map(ele => {
                            return (
                                <div className="content-field">
                                    <button className='close-btn' onClick={() => {
                                        removeItem(ele.id)
                                    }}>X</button>
                                    <div className="landscape-image-container">
                                        <img src={ele.imgSrc} alt="" />
                                    </div>
                                    <div className="content-title">{ele.title}</div>
                                    <div className="content-final-price">${ele.finalPrice}</div>
                                </div>
                            )
                        })}
                </div>
            </WishListModalStyle>)}
        <WishListModalStyle variant="backModal" onClick={() => {
            dispatch(setWishListModal(false));
        }}/>
        </>
    )
}

export default WishListModal;
