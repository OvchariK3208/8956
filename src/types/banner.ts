export interface IBanner {
	id: number;
	url: string;
	link: string;
}

export interface BannerState {
    banners: IBanner[];
    loading: boolean;
    error: null | string;
}
export enum BannerActionTypes {
    FETCH_BANNERS = 'FETCH_BANNERS',
    FETCH_BANNERS_SUCCESS = 'FETCH_BANNERS_SUCCESS',
    FETCH_BANNERS_ERROR = 'FETCH_BANNERS_ERROR',
}
interface FetchBannersAction {
    type: BannerActionTypes.FETCH_BANNERS;
}
interface FetchBannersSuccessAction {
    type: BannerActionTypes.FETCH_BANNERS_SUCCESS;
    payload: IBanner[];
}
interface FetchBannersErrorAction {
    type: BannerActionTypes.FETCH_BANNERS_ERROR;
    payload: string;
}
export type BannerAction = 
FetchBannersAction | 
FetchBannersErrorAction | 
FetchBannersSuccessAction