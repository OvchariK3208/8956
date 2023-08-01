import { CatalogAction, CatalogActionTypes, CatalogState } from "../../../types/catalog";

const initialState: CatalogState = {
  catalogs: [],
  loading: false,
  error: null
}

export const catalogReducer = (state = initialState, action: CatalogAction): CatalogState => {
  switch (action.type) {
    case CatalogActionTypes.FETCH_CATALOGS:
  		return { loading: true, error: null, catalogs: [] }
    case CatalogActionTypes.FETCH_CATALOGS_SUCCESS:
    	return { loading: false, error: null, catalogs: action.payload }
    case CatalogActionTypes.FETCH_CATALOGS_ERROR:
      return { loading: false, error: action.payload, catalogs: [] }
    default:
      return state
  }
}