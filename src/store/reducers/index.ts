import { foodReducer } from './food-list'
import { bannerReducer } from './banners'
import { catalogReducer } from './catalog'
import { shoppingReducer } from './shopping'

export default {
    food: foodReducer,
    banner: bannerReducer,
    catalog: catalogReducer,
    shopping: shoppingReducer
}