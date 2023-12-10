import { ActionTypes } from "../contants/action-Types";

const { CART_IS_OPEN, ADD_To_CART, REMOVE_SELECTED_PRODUCT, INC_CART_QUN, DEC_CART_QUN } = ActionTypes;

export const cartOpen = hasCartOpen => {
    return {
        type: CART_IS_OPEN,
        payload: hasCartOpen
    }
}

export const cartQuantityAndAddToCart = product => {
    return {
        type: ADD_To_CART,
        payload: product
    }
}

export const cartQtyAndRemoveCartItem = products => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
        payload: products
    }
}

export const incCartQun = itemId => {
    return {
        type: INC_CART_QUN,
        payload: itemId
    }
}

export const decCartQun = itemId => {
    return {
        type: DEC_CART_QUN,
        payload: itemId
    }

}