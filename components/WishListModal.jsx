import React from 'react';

import {
    WishListModalStyle
} from './styles/Style';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    selectWishList
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

    const closeModal = () => {
        dispatch(setWishListModal(false));
    };

    return (
        <>
        {wishList.length === 0 ? (
            <WishListModalStyle variant="empty">
                <button className='close-btn' onClick={closeModal}>X
                </button>
                <div className='empty-remind'>
                    You don't have items in the wish list!
                </div>
            </WishListModalStyle>
        ): (
            <WishListModalStyle variant="major">
                <button className='close-btn' onClick={closeModal}>X
                </button>
                <div className="modal-title">Wishlist</div>
                    <div className="wish-list-table">
                        {wishList.map((ele, index) => {
                            return (
                                <div className="content-field" key={index}>
                                    <button className='close-btn' onClick={() => {
                                        removeItem(ele.id)
                                    }}>X</button>
                                    {ele.isPortrait ? (
                                    <div className="portrait-image-container">
                                        <img src={ele.imgSrc} alt="" />
                                    </div>) : (
                                    <div className="landscape-image-container">
                                        <img src={ele.imgSrc} alt="" />
                                    </div>)}
                                    <div className="content-final-price">${ele.finalPrice}</div>
                                    <div className="content-title">{ele.title}</div>
                                </div>
                            )
                        })}
                </div>
                <div className="total-price">Total price: ${Math.round(wishList.reduce((acc, cur) => acc + cur.finalPrice, 0)* 100) / 100 }</div>
            </WishListModalStyle>)}
        <WishListModalStyle variant="backModal" onClick={closeModal}/>
        </>
    )
}

export default WishListModal;
