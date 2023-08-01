import { FoodAction, FoodActionTypes, FoodState } from "../../../types/food";

const initialState: FoodState = {
  foods: [],
  loading: false,
  error: null 
}

export const foodReducer = (state = initialState, action: FoodAction): FoodState => {
  switch (action.type) {
    case FoodActionTypes.FETCH_FOODS:
  		return { loading: true, error: null, foods: [] }
    case FoodActionTypes.FETCH_FOODS_SUCCESS:
    	return { loading: false, error: null, foods: action.payload }
    case FoodActionTypes.FETCH_FOODS_ERROR:
      return { loading: false, error: action.payload, foods: [] }
    default:
      return state
  }
}