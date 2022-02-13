export type sortType = "alphabet" | "price";

type SortProps = {
  data: any
  type: sortType;
  reverse: boolean;
};

export const sortUtils = (type, data, reverse=false ) => {
  if (!data || data.length === 0) {
    return data;
  }
  const newData = [...data];
    if (type === "alphabet") {
    let sortedAlphabet = newData.sort((a, b) => {
      if (reverse) {
        if (a > b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
      } else {
        if (a < b) {
          return -1;
        } else if (a < b) {
          return 1;
        }
      }
      return 0;
    });

    return sortedAlphabet;
  }

  if (type === "price") {
    let sortedAlphabet = newData.sort((a, b) => {
      if (reverse) {
        if (a > b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
      } else {
        if (a < b) {
          return -1;
        } else if (a < b) {
          return 1;
        }
      }
      return 0;
    });

    return sortedAlphabet;
  }


  }

