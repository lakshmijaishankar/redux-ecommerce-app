import { ActionTypes } from "../contants/action-Types"

export const filterCategory = filterType => {
    return {
        type: ActionTypes.FILTER_CATEGORY,
        filterApi: filterType
    }
}