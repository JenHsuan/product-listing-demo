//Initial states
export const initialState = {
    wishList: [],
    showModal: false
};

//Selector functions
export const selectWishList = rootState => rootState.productReducer.wishList;
