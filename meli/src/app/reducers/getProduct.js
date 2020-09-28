import * as actions from '../types/actionTypes';

const initialState = {
    product: [],
    loading: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_PRODUCT_DATA:
            return {
                ...state,
                loading: true,
            }
        case actions.FETCH_PRODUCT_DATA_ERROR:
            return {
                loading: false,
            }
        case actions.FETCH_PRODUCT_DATA_SUCCESS:
            return {
                product: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
