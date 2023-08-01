import { CatalogAction, CatalogActionTypes } from "../../types/catalog";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchCatalogs = () => {
  return async (dispatch: Dispatch<CatalogAction>) => {
    try {
      dispatch({ type: CatalogActionTypes.FETCH_CATALOGS })
      const response = await axios.get('https://64b2e99c38e74e386d55b715.mockapi.io/catalog')
      dispatch({
      	type: CatalogActionTypes.FETCH_CATALOGS_SUCCESS,
      	payload: response.data
      })
    } catch (e) {
      dispatch({
        type: CatalogActionTypes.FETCH_CATALOGS_ERROR,
        payload: 'Произошла ошибка при загрузке catalog'
      })
    }
  }
}