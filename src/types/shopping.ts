export interface IShopping {
	id: number;
	title: string;
	price: number;
	img: string;
	spicy: boolean;
}

export interface ShoppingState {
    shoppings: any[];
    loading: boolean;
    error: null | string;
}
export enum ShoppingActionTypes {
    FETCH_SHOPPINGS = 'FETCH_SHOPPINGS',
    FETCH_SHOPPINGS_ADD = 'FETCH_SHOPPINGS_ADD',
    FETCH_SHOPPINGS_REMOVE = 'FETCH_SHOPPINGS_REMOVE',
    FETCH_SHOPPINGS_TOTAL_COUNT = 'FETCH_SHOPPINGS_TOTAL_COUNT',
    FETCH_SHOPPINGS_SUCCESS = 'FETCH_SHOPPINGS_SUCCESS',
    FETCH_SHOPPINGS_ERROR = 'FETCH_SHOPPINGS_ERROR',
}
interface FetchShoppingsAction {
    type: ShoppingActionTypes.FETCH_SHOPPINGS;
}
interface FetchShoppingsSuccessAction {
    type: ShoppingActionTypes.FETCH_SHOPPINGS_SUCCESS;
    payload: IShopping[];
}
interface FetchShoppingsAddAction {
    type: ShoppingActionTypes.FETCH_SHOPPINGS_ADD;
    payload: [];
}
interface FetchShoppingsRemoveAction {
    type: ShoppingActionTypes.FETCH_SHOPPINGS_REMOVE;
    payload: [];
}
interface FetchShoppingsTotalCountAction {
    type: ShoppingActionTypes.FETCH_SHOPPINGS_TOTAL_COUNT;
    payload: [];
}
interface FetchShoppingsErrorAction {
    type: ShoppingActionTypes.FETCH_SHOPPINGS_ERROR;
    payload: string;
}
export type ShoppingAction = 
FetchShoppingsAction | 
FetchShoppingsErrorAction | 
FetchShoppingsSuccessAction |
FetchShoppingsAddAction |
FetchShoppingsRemoveAction