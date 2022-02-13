import { ProductItemTypes } from "src/types/store/product"

export type ImageTypes ={
    src:string|"",
    alt:string|""
  }
export type CardProps={
    bestSeller:boolean;
    image:ImageTypes;
    title?: string;
    category?:string
    price?:string
    name:string
    product?:Array<ProductItemTypes>
}