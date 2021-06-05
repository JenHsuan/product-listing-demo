import React, { useState, useEffect } from 'react';
import ItemCell from './ItemCell';
import WishListButton from './WishListButton';
import WishListModal from './WishListModal';
import ScrollButton from './ScrollButton';

import {
    ItemCellStyle,
    ItemCellContainerStyle,
    ItemCellPageContainerStyle
} from './styles/Style';

import {
    useSelector,
} from "react-redux";

import {
    selectShowWishListModal
} from "./states/states";

import cake1 from '../public/images/cake/cake1.jpeg';
import cake2 from '../public/images/cake/cake2.jpeg';
import cake3 from '../public/images/cake/cake3.jpeg';

import dog1 from '../public/images/dog/dog1.jpg';
import dog2 from '../public/images/dog/dog2.jpeg';
import dog3 from '../public/images/dog/dog3.jpeg';

import bench1 from '../public/images/bench/bench1.jpeg';
import bench2 from '../public/images/bench/bench2.jpeg';
import bench3 from '../public/images/bench/bench3.jpeg';

import ipad1 from '../public/images/ipad/rose_ipad1.jpg';
import ipad2 from '../public/images/ipad/rose_ipad2.jpg';
import ipad3 from '../public/images/ipad/rose_ipad3.jpg';

import iphone1 from '../public/images/iphone/iphone1.jpeg';
import iphone2 from '../public/images/iphone/iphone2.jpeg';
import iphone3 from '../public/images/iphone/iphone3.jpg';

import camera1 from '../public/images/camera/camera1.jpeg';
import camera2 from '../public/images/camera/camera2.jpeg';
import camera3 from '../public/images/camera/camera3.jpeg';

const data = [{
    id: 0,
    imgSrcList: [cake1, cake2, cake3],
    title: 'Chocolate Birthdate Cake with Strewberries',
    finalPrice: 15,
    regularPrice: 20,
    fullStarNumber: 4,
    hasHalfStar: false
}, {
    id: 1,
    imgSrcList: [dog1, dog2, dog3],
    title: 'Pomeranian',
    finalPrice: 500,
    regularPrice: 600,
    fullStarNumber: 4,
    hasHalfStar: true
}, {
    id: 2,
    imgSrcList: [bench1, bench2, bench3],
    title: 'Fitness Gear Pro Olympic Weight Bench, steel',
    finalPrice: 249.99,
    regularPrice: 300,
    fullStarNumber: 4,
    hasHalfStar: true
}, {
    id: 3,
    imgSrcList: [ipad1, ipad2, ipad3],
    title: 'Apple iPad Air Retina Display Tablet 32GB, Wi-Fi',
    finalPrice: 189.99,
    regularPrice: 190,
    fullStarNumber: 4,
    hasHalfStar: true
}, {
    id: 4,
    imgSrcList: [iphone1, iphone2, iphone3],
    title: 'iPhone 12 mini - 128GB',
    finalPrice: 31.21,
    regularPrice: 32.88,
    fullStarNumber: 4,
    hasHalfStar: true
}, {
    id: 5,
    imgSrcList: [camera1, camera2, camera3],
    title: 'Sony α7III',
    finalPrice: 189.99,
    regularPrice: 199.88,
    fullStarNumber: 5,
    hasHalfStar: false
}];

const ItemCellPage = () => {
    const [itemCells, setItemCells] = useState([]);
    const showWishListModal = useSelector(selectShowWishListModal);

    useEffect(() => {
        setItemCells(data);
    }, []);

    return (
        <ItemCellPageContainerStyle variant="major">
            <ScrollButton></ScrollButton>
        {showWishListModal && <WishListModal/>}
        <ItemCellContainerStyle variant="grid">
            {itemCells.map(cell => {
                return (
                        <ItemCellStyle variant='demoContainer' key={`item-container-${cell.id}`}>
                        <ItemCell id={cell.id}
                            key={`item-${cell.id}`}
                            imgSrcList={cell.imgSrcList}
                            title={cell.title}
                            finalPrice={cell.finalPrice}
                            regularPrice={cell.regularPrice}
                            fullStarNumber={cell.fullStarNumber}
                            hasHalfStar={cell.hasHalfStar}/>
                        </ItemCellStyle>
                );
            })}
            </ItemCellContainerStyle>
            <WishListButton/>
        </ItemCellPageContainerStyle>
    )
}

export default ItemCellPage;
