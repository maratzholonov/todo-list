import { ON_ADD_ITEM, ON_DELETE, ON_FILTER_CHANGE, ON_TOGGLE_DONE } from "./actionTypes";

export const onToggleDone = (id) => {
   return {
      type: ON_TOGGLE_DONE,
      payload: id,
   };
};

export const onDelete = (id) => {
   return {
      type: ON_DELETE,
      payload: id,
   };
};

export const onAddItem = (text) => {
   return {
      type: ON_ADD_ITEM,
      payload: text,
   };
};

export const onFilterChange = (name) => {
   return {
      type: ON_FILTER_CHANGE,
      payload: name,
   };
};
