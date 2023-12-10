import { ActionTypes } from "../contants/action-Types"

export const searchPrd = prd => {
    return {
        type: ActionTypes.SEARCH_ITEM,
        payload: prd
    }


}