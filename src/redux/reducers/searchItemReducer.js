import { ActionTypes } from '../contants/action-Types'
const searchInitalState = {
    item: []
}
export const searchItem = (state = searchInitalState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionTypes.SEARCH_ITEM:
            return {
                ...state,
                item: payload
            }
        default:
            return state
    }
}