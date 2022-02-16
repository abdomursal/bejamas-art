import { ProductItemTypes } from "src/types/store/product";

export type sortType = "name" | "price";

export type SortProps = {
  type?: sortType;
  data: Array<ProductItemTypes> | [];
  reverse?: boolean;
};

export const sortUtils = (type, data, reverse) => {
  if (!data || data.length === 0) {
    return data;
  }

  const newData = [...data];
  let sorted = newData.sort((a, b) => {
    if (reverse) {
      if (a[type] > b[type]) {
        return -1;
      } else if (a[type] > b[type]) {
        return 1;
      }
    } else {
      if (a[type] < b[type]) {
        return -1;
      } else if (a[type] < b[type]) {
        return 1;
      }
    }
    return 0;
  });

  return sorted;
};
