import { ShoppingAction, ShoppingActionTypes } from "../../types/shopping";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchShoppings = () => {
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      dispatch({ type: ShoppingActionTypes.FETCH_SHOPPINGS })
      const response = await axios.get('https://64b2e99c38e74e386d55b715.mockapi.io/shopping')
      dispatch({
      	type: ShoppingActionTypes.FETCH_SHOPPINGS_SUCCESS,
      	payload: response.data
      })
    } catch (e) {
      dispatch({
        type: ShoppingActionTypes.FETCH_SHOPPINGS_ERROR,
        payload: 'Произошла ошибка при загрузке shoppings'
      })
    }
  }
}