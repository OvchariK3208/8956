export interface ICatalog {
	id: number;
	title: string;
	img: string;
	link: string;
}

export interface CatalogState {
    catalogs: ICatalog[];
    loading: boolean;
    error: null | string;
}
export enum CatalogActionTypes {
    FETCH_CATALOGS = 'FETCH_CATALOGS',
    FETCH_CATALOGS_SUCCESS = 'FETCH_CATALOGS_SUCCESS',
    FETCH_CATALOGS_ERROR = 'FETCH_CATALOGS_ERROR',
}
interface FetchCatalogsAction {
    type: CatalogActionTypes.FETCH_CATALOGS;
}
interface FetchCatalogsSuccessAction {
    type: CatalogActionTypes.FETCH_CATALOGS_SUCCESS;
    payload: ICatalog[];
}
interface FetchCatalogsErrorAction {
    type: CatalogActionTypes.FETCH_CATALOGS_ERROR;
    payload: string;
}
export type CatalogAction = 
FetchCatalogsAction | 
FetchCatalogsErrorAction | 
FetchCatalogsSuccessAction