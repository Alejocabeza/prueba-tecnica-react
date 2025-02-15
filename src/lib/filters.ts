export const filters = [
  {
    id: "filter_by_date",
    title: "Filter By Release Date",
    type: "datepicker",
    defaultValue: new Date().toISOString().split("T")[0],
  },
  {
    id: "filter_by_rating",
    title: "Filter By Rating",
    type: "select",
    options: ["Todos", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    defaultValue: "Todos",
  },
];
