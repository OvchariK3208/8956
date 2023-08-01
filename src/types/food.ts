export interface IFood {
	id: number;
	title: string;
	body: string[];
	price: number;
	img: string;
	spicy: null | boolean;
	popular: number;
}

export interface FoodState {
    foods: IFood[];
    loading: boolean;
    error: null | string;
}
export enum FoodActionTypes {
    FETCH_FOODS = 'FETCH_FOODS',
    FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS',
    FETCH_FOODS_ERROR = 'FETCH_FOODS_ERROR',
}
interface FetchFoodsAction {
    type: FoodActionTypes.FETCH_FOODS;
}
interface FetchFoodsSuccessAction {
    type: FoodActionTypes.FETCH_FOODS_SUCCESS;
    payload: IFood[];
}
interface FetchFoodsErrorAction {
    type: FoodActionTypes.FETCH_FOODS_ERROR;
    payload: string;
}
export type FoodAction = FetchFoodsAction | FetchFoodsErrorAction | FetchFoodsSuccessAction