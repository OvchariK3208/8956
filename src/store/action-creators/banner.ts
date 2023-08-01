import { BannerAction, BannerActionTypes } from "../../types/banner";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchBanners = () => {
  return async (dispatch: Dispatch<BannerAction>) => {
    try {
      dispatch({ type: BannerActionTypes.FETCH_BANNERS })
      const response = await axios.get('https://64b0a459c60b8f941af5dd72.mockapi.io/banners')
      dispatch({
      	type: BannerActionTypes.FETCH_BANNERS_SUCCESS,
      	payload: response.data
      })
    } catch (e) {
      dispatch({
        type: BannerActionTypes.FETCH_BANNERS_ERROR,
        payload: 'Произошла ошибка при загрузке banners'
      })
    }
  }
}