import { ActionTypes } from '../contants/action-Types'

const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    // console.log(payload)
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case SELECTED_PRODUCT:
            return { ...state, ...payload };
        default:
            return state
    }
}