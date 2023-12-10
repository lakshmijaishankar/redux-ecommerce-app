import { ActionTypes } from "../contants/action-Types";

const initialState = {
    isOpen: false,
}
const cartInitalState = {
    quantity: 0,
    item: [],
    // itemQun: 1
}
export const cartToOpenReducer = (state = initialState, action) => {
    const { type, payload } = action
    // console.log(payload);
    switch (type) {
        case ActionTypes.CART_IS_OPEN:
            return {
                ...state,
                isOpen: payload
            }
        default: return state
    }
}

export const addOrRemoveCartItem = (state = cartInitalState, action) => {
    const { type, payload } = action
    // console.log(...payload)

    switch (type) {
        case ActionTypes.ADD_To_CART:
            console.log({ ...payload })
            return {
                ...state,
                quantity: state.quantity + 1,
                item: [...state.item, { ...payload, itemQun: 1, orginPrice: payload.price }]
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                quantity: state.quantity - 1,
                item: payload
            }
        case ActionTypes.INC_CART_QUN:
            const temp = state.item.map(prd => {
                if (prd.id === payload) {
                    return {
                        ...prd,
                        price: prd.price + prd.orginPrice,
                        itemQun: prd?.itemQun + 1
                    }
                }
                return prd
            })
            // console.log(item)
            return {
                ...state,
                item: temp
            }
        case ActionTypes.DEC_CART_QUN:
            console.log(payload)
            return {
                ...state,
                item: state.item.map(prd =>
                    prd.id === payload ? { ...prd, price: prd.price - prd.orginPrice, itemQun: prd?.itemQun - 1 } : prd
                )
            };
        default: return state;
    }
}
