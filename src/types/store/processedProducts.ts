import { CategoryTypes, PriceTypes } from "./filter"
import { ProductItemTypes } from "./product"

export type FilteredArg = {
    type: "category" | "price";
    value: string;
  };

export type processedProductTypes={
    products:Array<ProductItemTypes>
    filterTypes:FilteredArg
    filterCategoryItem:Array<CategoryTypes>
    filterPriceItem:Array<PriceTypes>

    sortType?:"price"|"order"
}