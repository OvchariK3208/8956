import * as FoodActionCreators from './food'
import * as BannerActionCreators from './banner'
import * as CatalogActionCreators from './catalog'
import * as ShoppingActionCreators from './shopping'

export default {
    ...FoodActionCreators,
    ...BannerActionCreators,
    ...CatalogActionCreators,
    ...ShoppingActionCreators
}