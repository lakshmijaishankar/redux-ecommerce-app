import { ActionTypes } from "../contants/action-Types"

const filter = {
    filterType: ''
}
export const filterReducer = (state = filter, action) => {
    const { type, filterApi } = action
    switch (type) {
        case ActionTypes.FILTER_CATEGORY:
            return {
                ...state,
                filterType: filterApi
            }
        default:
            return state
    }
}