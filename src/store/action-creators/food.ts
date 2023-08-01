import { FoodAction, FoodActionTypes } from "../../types/food";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchFoods = () => {
  return async (dispatch: Dispatch<FoodAction>) => {
    try {
      dispatch({ type: FoodActionTypes.FETCH_FOODS })
      const response = await axios.get('https://64b0a459c60b8f941af5dd72.mockapi.io/food')
      dispatch({
      	type: FoodActionTypes.FETCH_FOODS_SUCCESS,
      	payload: response.data
      })
    } catch (e) {
      dispatch({
        type: FoodActionTypes.FETCH_FOODS_ERROR,
        payload: 'Произошла ошибка при загрузке foods'
      })
    }
  }
}