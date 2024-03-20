export const sortingOptions = [
  {
    label: "Lowest First",
    value: "lowest",
    keyName: "price",
    direction: "asc",
    type: "number",
  },
  {
    label: "Highest First",
    value: "highest",
    keyName: "price",
    direction: "desc",
    type: "number",
  },
  {
    label: "Oldest First",
    value: "oldest",
    keyName: "createDate",
    direction: "asc",
    type: "date",
  },
  {
    label: "Newest First",
    value: "newest",
    keyName: "createDate",
    direction: "desc",
    type: "date",
  },
];
