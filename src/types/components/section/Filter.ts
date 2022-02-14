import { CategoryTypes, PriceTypes } from "src/types/store/filter";


export type FilteredArg = {
    value: string;
    label: string;
  };

export type FilterProps={
    title:string
    filterName:string
    items:Array<FilteredArg>
    filterType:string
}