import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeartButton from './HeartButton';
import fullStar from '../public/Star_Filled.svg'
import halfStar from '../public/Star_Half_Empty.svg'

import {
    ItemCellStyle,
} from './styles/Style';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    setWishList,
} from "./actions/action";

import {
    selectWishList
} from "./states/states";

const ItemCell = ({ id, imgSrcList, isPortrait, title, finalPrice, regularPrice, fullStarNumber, hasHalfStar }) => {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const wishList = useSelector(selectWishList);
    const [fullStars, setFullStars] = useState([]);

    const changeImage = (add) => {
        let newIndex = index + add;
        if (newIndex < 0) {
            newIndex = imgSrcList.length - 1;
        }

        if (newIndex > imgSrcList.length - 1) {
            newIndex = 0;
        }
        setIndex(newIndex);
    };

    const onHeartClicked = () => {
        const isSelected = wishList.find(ele => ele.id === id);
        const oldWishList = Array.from(wishList);
        if (isSelected) {
            dispatch(setWishList([
                ...oldWishList.filter(ele => ele.id !== id),
            ]))
        } else {
            dispatch(setWishList([
                ...oldWishList,
                {
                    id: id,
                    imgSrc: imgSrcList[index],
                    isPortrait: isPortrait,
                    title: title,
                    finalPrice: finalPrice,
                    regularPrice: regularPrice,
                    fullStarNumber: fullStarNumber,
                    hasHalfStar: hasHalfStar
            }]))
        }
    };

    useEffect(() => {
        const stars = [];
        for (var i = 0; i < fullStarNumber; i++) {
            stars.push({
                src: fullStar,
                alt: "no star image"
            });
        }
        setFullStars(stars)
    },[fullStarNumber]);

    return (
        <ItemCellStyle variant='contentBody'>
            {isPortrait ? (
               <ItemCellStyle variant='portraitImageContainer'>
                    <div className='left-indicator' onClick={() => {changeImage(-1)}}/>
                        <img src={imgSrcList[index]} alt="no image" />
                    <div className='right-indicator' onClick={() => {changeImage(1)}}/>
                </ItemCellStyle>
            ) : (
                <ItemCellStyle variant='landScapeImageContainer'>
                    <div className='left-indicator' onClick={() => {changeImage(-1)}}/>
                        <img src={imgSrcList[index]} alt="no image" />
                    <div className='right-indicator' onClick={() => {changeImage(1)}}/>
                </ItemCellStyle>
            )}

            <div className="content-title">{title}</div>
            <div className="content-field">
                <div className="content-description">final price:</div>
                <span className="content-final-price">${finalPrice}</span>
            </div>
            <div className="content-field">
                <div className="content-description">regualr price:</div>
                <span className="content-regular-price">${regularPrice}</span>
            </div>
            <div className="content-field">
                {fullStars.map(star => {
                    return (
                        <ItemCellStyle variant='starContainer'>
                            <img src={star.src} alt={star.alt} />
                        </ItemCellStyle>)})}
                {hasHalfStar && (
                    <ItemCellStyle variant='starContainer'>
                        <img src={halfStar} alt="no star image" />
                    </ItemCellStyle>
                )}
            </div>
            <HeartButton onHeartClicked={() => onHeartClicked()}
                        isSelected={ wishList.find(ele => ele.id === id)}/>
        </ItemCellStyle>
    )
};

ItemCell.propTypes = {
    id: PropTypes.number.isRequired,
    imgSrcList: PropTypes.array.isRequired,
    isPortrait: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    finalPrice: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    fullStarNumber: PropTypes.number.isRequired,
    hasHalfStar: PropTypes.bool.isRequired
};


export default ItemCell

