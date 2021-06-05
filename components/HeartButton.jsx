import React from 'react';
import PropTypes from 'prop-types';
import fullHeart from '../public/icons/Heart_Filled.svg';
import emptyHeart from '../public/icons/Heart_Empty.svg';

import {
    ItemCellStyle,
} from './styles/Style';

const HeartButton = ({ onHeartClicked, isSelected }) => {
    return (
        <ItemCellStyle variant='heartContainer' data-tooltip="Add to Wish List">
            <img src={isSelected ? fullHeart : emptyHeart} alt="no heart image"
                onClick={() => onHeartClicked()} />
        </ItemCellStyle>
    )
}

HeartButton.propTypes = {
    onHeartClicked: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
};

export default HeartButton;
