import { CategoryTypes, PriceTypes } from "./filter"
import { ProductItemTypes } from "./product"


export type processedProductTypes={
    products:Array<ProductItemTypes>
    filterTypes: "category" | "price"
    filterCategoryItem:Array<CategoryTypes>
    filterPriceItem:Array<PriceTypes>

    sortType?:"price"|"order"
}