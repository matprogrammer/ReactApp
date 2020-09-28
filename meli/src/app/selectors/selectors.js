import { createSelector } from 'reselect';

const productState = state => state.product;
const productsState = state => state.products;

export const productLoading = createSelector(
    productState,
    product => product?.loading || false
)

export const productsLoading = createSelector(
    productsState,
    products => products?.loading || false
)
