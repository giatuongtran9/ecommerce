import { CATEGORIES_ACTION_TYPES } from "../categories/categories.types"

export const INITIAL_VALUE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = INITIAL_VALUE, action) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: payload, isLoading: false}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, error: payload, isLoading: false}
        default:
            return state
    }
}