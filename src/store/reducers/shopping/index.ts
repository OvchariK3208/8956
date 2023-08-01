import { ShoppingAction, ShoppingActionTypes, ShoppingState } from "../../../types/shopping";

const initialState: ShoppingState = {
  shoppings: [],
  loading: false,
  error: null
}

export const shoppingReducer = (state = initialState, action: ShoppingAction): ShoppingState => {
  switch (action.type) {
    case ShoppingActionTypes.FETCH_SHOPPINGS:
  		return { loading: true, error: null, shoppings: [] }
  	case ShoppingActionTypes.FETCH_SHOPPINGS_ADD:
      return { loading: false, error: null, shoppings: [...state.shoppings, action.payload] }
    case ShoppingActionTypes.FETCH_SHOPPINGS_REMOVE:
      return { loading: false, error: null, shoppings: state.shoppings.filter(shopping => shopping.id !== action.payload) }
    case ShoppingActionTypes.FETCH_SHOPPINGS_SUCCESS:
    	return { loading: false, error: null, shoppings: action.payload }
    case ShoppingActionTypes.FETCH_SHOPPINGS_ERROR:
      return { loading: false, error: action.payload, shoppings: [] }
    default:
      return state
  }
}

export const addShoppings = (payload: any) => ({ type: ShoppingActionTypes.FETCH_SHOPPINGS_ADD, payload })  

export const removeShoppings = (payload: any) => {
	console.log("removeShoppings", payload)
	return ({ type: ShoppingActionTypes.FETCH_SHOPPINGS_REMOVE, payload })}  