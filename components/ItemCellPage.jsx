import React, { useState, useEffect } from 'react';
import ItemCell from './ItemCell';
import WishListButton from './WishListButton';
import WishListModal from './WishListModal';
import {
    ItemCellStyle,
    ItemCellContainerStyle,
    ItemCellPageContainerStyle,
    WishListModalStyle
} from './styles/Style';

import {
    useSelector,
} from "react-redux";

import {
    selectShowWishListModal
} from "./states/states";

import cake from '../public/S__10166291.jpg';
import dog from '../public/S__10166293.jpg';

const ItemCellPage = () => {
    const NUMBER_ITEM = 6;
    const [itemCells, setItemCells] = useState([]);
    const showWishListModal = useSelector(selectShowWishListModal);

    useEffect(() => {
        const data = [];
        for (var i = 0; i < NUMBER_ITEM; i++) {
            data.push({
                id: i,
                imgSrcList: [dog, cake],
                isPortrait: false,
                title: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
                finalPrice: 450,
                regularPrice: 420,
                fullStarNumber: 4,
                hasHalfStar: true
            });
        }
        setItemCells(data);
    }, []);

    return (
        <>
        {showWishListModal && <WishListModal/>}
        <ItemCellContainerStyle variant="grid">
            {itemCells.map(cell => {
                return (
                        <ItemCellStyle variant='demoContainer'>
                        <ItemCell id={cell.id }
                            imgSrcList={cell.imgSrcList}
                                        isPortrait={cell.isPortrait}
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
        </>
    )
}

export default ItemCellPage;
