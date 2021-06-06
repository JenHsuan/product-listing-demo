import React, { cloneElement } from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

//actions
import {
    setWishList,
    setWishListModal
} from "../../../components/actions/action";

//types
import {
    SET_WISH_LIST,
    SET_WISH_LIST_MODAL
} from '../../../components/types';

//reducers
import { productReducer } from '../../../components/reducers/productReducer';

const middlewares = [thunk];
const mockedStore = configureStore(middlewares);

describe('Redux', () => {
    let store;
    let wishList;
    let initialData;
    let expectedData;
    beforeEach(() => {
        store = mockedStore({
            wishList: [],
            showWishListModal: false
        });

        initialData = { "showWishListModal": false, "wishList": [] };
        wishList = [{
            id: 0,
            imgSrc: null,
            isPortrait: false,
            title: 'Chocolate Birthdate Cake with Strewberries',
            finalPrice: 15,
            regularPrice: 20,
            fullStarNumber: 4,
            hasHalfStar: false
        }];
    });

    test('Test productReducer: initial state', () => {
        //initial states
        expect(productReducer(undefined, {})).toEqual(initialData);
    });

    test('Test productReducer for the setWishList action', () => {
        expectedData = { "showWishListModal": false, "wishList": wishList };
        expect(productReducer(initialData, setWishList(wishList))).toEqual(expectedData);
    });

    test('Test productReducer for the setWishListModal action', () => {
        expectedData = { "showWishListModal": true, "wishList": [] };
        expect(productReducer(initialData, setWishListModal(true))).toEqual(expectedData);
    });

    test('Test action for the setWishList action', () => {
        expect(setWishList(wishList)).toEqual({ type: SET_WISH_LIST, payload: { wishList: wishList}});
    });

    test('Test action for the setWishListModal action', () => {
        expect(setWishListModal(true)).toEqual({ type: SET_WISH_LIST_MODAL, payload: { showWishListModal: true}});
    });

});
