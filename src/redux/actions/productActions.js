import { ActionTypes } from "../contants/action-Types"

const { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } = ActionTypes

export const setProducts = product => {
    return {
        type: SET_PRODUCTS,
        payload: product
    }
}

export const selectedProduct = product => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}