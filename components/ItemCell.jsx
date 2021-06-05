import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeartButton from './HeartButton';
import fullStar from '../public/icons/Star_Filled.svg'
import halfStar from '../public/icons/Star_Half_Empty.svg'
import emptyStar from '../public/icons/Star_Empty.svg'

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

const ItemCell = ({ id, imgSrcList, title, finalPrice, regularPrice, fullStarNumber, hasHalfStar }) => {
    const MAX_STAR_NUMBER = 5;
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const wishList = useSelector(selectWishList);
    const [fullStars, setFullStars] = useState([]);
    const [emptyStars, setEmptyStars] = useState([]);
    const [isPortrait, setIsPortrait] = useState([false]);

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

    const onImgLoad = ({ target: img }) => {
        const flag = img.offsetHeight > img.offsetWidth;
        if (isPortrait !== flag) {
            setIsPortrait(flag);
        }
    };


    useEffect(() => {
        let stars = [];
        fullStarNumber = fullStarNumber > MAX_STAR_NUMBER ? MAX_STAR_NUMBER : fullStarNumber;
        for (var i = 0; i < fullStarNumber; i++) {
            stars.push({
                src: fullStar,
                alt: "no star image"
            });
        }
        setFullStars(stars)

        let emptyStarNumber = MAX_STAR_NUMBER - fullStarNumber;
        if (hasHalfStar) {
            emptyStarNumber -= 1;
        }
        stars = [];

        for (var i = 0; i < emptyStarNumber; i++) {
            stars.push({
                src: emptyStar,
                alt: "no star image"
            });
        }
        setEmptyStars(stars)

    },[fullStarNumber]);

    return (
        <ItemCellStyle variant='contentBody'>
            {isPortrait ? (
               <ItemCellStyle variant='portraitImageContainer'>
                    <div className='left-indicator' onClick={() => { changeImage(-1) }}>{ '<' }</div>
                    <img src={imgSrcList[index]} alt="no image" onLoad={onImgLoad}/>
                    <div className='right-indicator' onClick={() => {changeImage(1)}}>{ '>' }</div>
                </ItemCellStyle>
            ) : (
                <ItemCellStyle variant='landScapeImageContainer'>
                    <button className='left-indicator' onClick={() => { changeImage(-1) }}>{ '<' }</button>
                    <img src={imgSrcList[index]} alt="no image" onLoad={onImgLoad}/>
                    <button className='right-indicator' onClick={() => {changeImage(1)}}>{ '>' }</button>
                </ItemCellStyle>
            )}

            <div className="content-title">{title}</div>
            <div className="content-field">
                <div className="content-description">final price:</div>
                <span className="content-final-price">${finalPrice}</span>
            </div>
            <div className="content-field">
                <div className="content-description">regualar price:</div>
                <span className="content-regular-price">${regularPrice}</span>
            </div>
            <ItemCellStyle variant='starsContainer'>
                {fullStars.map((star, index) => {
                    return (
                        <div className="starContainer" key={`full-star-${index}`}>
                            <img src={star.src} alt={star.alt}/>
                        </div>)
                })}
                {emptyStars.map(star => {
                    return (
                        <div className="starContainer" key={`empty-star-${index}`}>
                            <img src={star.src} alt={star.alt} />
                        </div>)
                })}
                {hasHalfStar && fullStarNumber <= MAX_STAR_NUMBER - 1 && (
                        <div className="starContainer">
                            <img src={halfStar} alt="no star image" />
                        </div>
                    )}
            </ItemCellStyle>
            <HeartButton onHeartClicked={() => onHeartClicked()}
                isSelected={typeof wishList.find(ele => ele.id === id) != 'undefined'}>
            </HeartButton>
        </ItemCellStyle>
    )
};

ItemCell.propTypes = {
    id: PropTypes.number.isRequired,
    imgSrcList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    finalPrice: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    fullStarNumber: PropTypes.number.isRequired,
    hasHalfStar: PropTypes.bool.isRequired
};


export default ItemCell

