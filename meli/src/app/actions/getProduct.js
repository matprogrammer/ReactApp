import axios from 'axios';
import { FETCH_PRODUCT_DATA_SUCCESS, FETCH_PRODUCT_DATA_ERROR, FETCH_PRODUCT_DATA } from '../types/actionTypes';

const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_DATA });

    const parts = window.location.href.split('/');
    const id = parts.pop() || parts.pop();
    const result = await axios(`/api/items/${id}`);

    if (result.data) {
      dispatch({
        type: FETCH_PRODUCT_DATA_SUCCESS,
        payload: result.data.products,
      });
      return result.data.products;
    } else {
      dispatch({
        type: FETCH_PRODUCT_DATA_ERROR,
        payload: result.data,
      });
      }
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_DATA_ERROR,
      });
    }
}

export default getProduct;
