import * as actions from '../types/actionTypes';

const initialState = {
    products: [],
    loading: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
            }
        case actions.FETCH_PRODUCTS_ERROR:
            return {
                loading: false,
            }
        case actions.FETCH_PRODUCTS_SUCCESS:
            return {
                product: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
