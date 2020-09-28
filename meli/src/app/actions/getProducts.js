import axios from 'axios';
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS } from '../types/actionTypes';

const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS });

    const params = new URLSearchParams(window.location.search);
    const result = await axios(`/api/items?q=${params}`)
    if (result?.data) {
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: result.data.products,
      });
      return result.data.products;
    } else {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: [],
      });
      }
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
      });
    }
}

export default getProducts;
