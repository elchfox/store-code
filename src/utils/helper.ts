import { sortingOptions } from "./sortingOptions";

export const sortData = (data: any[], optionValue: string) => {
  const selectedOption = sortingOptions.find(
    (item) => item.value === optionValue
  );
  if (selectedOption) {
    const sortedData = [...data].sort((a, b) => {
      const keyA = a[selectedOption.keyName];
      const keyB = b[selectedOption.keyName];
      if (selectedOption.type === "date") {
        return selectedOption.direction === "asc"
          ? new Date(keyA).getTime() - new Date(keyB).getTime()
          : new Date(keyB).getTime() - new Date(keyA).getTime();
      } else if (selectedOption.type === "number") {
        return selectedOption.direction === "asc"
          ? a.price - b.price
          : b.price - a.price;
      }
      if (selectedOption.direction === "asc") {
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
      }
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    return sortedData;
  }
  return data;
};
