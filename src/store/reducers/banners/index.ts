import { BannerAction, BannerActionTypes, BannerState } from "../../../types/banner";

const initialState: BannerState = {
  banners: [],
  loading: false,
  error: null
}

export const bannerReducer = (state = initialState, action: BannerAction): BannerState => {
  switch (action.type) {
    case BannerActionTypes.FETCH_BANNERS:
  		return {	loading: true, error: null, banners: []	}
    case BannerActionTypes.FETCH_BANNERS_SUCCESS:
    	return {	loading: false, error: null, banners: action.payload	}
    case BannerActionTypes.FETCH_BANNERS_ERROR:
      return {	loading: false, error: action.payload, banners: []	}
    default:
      return state
  }
}