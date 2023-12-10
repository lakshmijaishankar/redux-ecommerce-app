import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { addOrRemoveCartItem, cartToOpenReducer } from "./cartReducer";
import { searchItem } from "./searchItemReducer";
import { filterReducer } from "./filterReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    cartToOpen: cartToOpenReducer,
    selectedProduct: selectedProductReducer,
    addOrRemoveCartItem: addOrRemoveCartItem,
    saerchItem: searchItem,
    filterCategory: filterReducer
})