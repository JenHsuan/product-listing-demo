//Initial states
export const initialState = {
    wishList: [],
    showWishListModal: false
};

//Selector functions
export const selectWishList = rootState => rootState.productReducer.wishList;
export const selectShowWishListModal = rootState => rootState.productReducer.showWishListModal;
