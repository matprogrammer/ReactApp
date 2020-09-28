import { combineReducers } from 'redux'
import getProduct from './getProduct';
import getProducts from './getProducts';

export default combineReducers({
    product: getProduct,
    products: getProducts
});
