import { ON_ADD_ITEM, ON_DELETE, ON_FILTER_CHANGE, ON_TOGGLE_DONE } from "../actions/actionTypes";

let maxId = 100;

const initialState = {
   items: [],
   filter: "all", // all, done, active
};

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case ON_TOGGLE_DONE:
         const itemId = action.payload;
         const idx = state.items.findIndex((item) => item.id === itemId);
         const oldItem = state.items[idx];
         const value = !oldItem.done;
         const item = { ...state.items[idx], done: value };
         const items = [...state.items.slice(0, idx), item, ...state.items.slice(idx + 1)];
         return {
            ...state,
            items,
         };
      case ON_DELETE:
         const index = state.items.findIndex((item) => item.id === action.payload);

         return {
            ...state,
            items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
         };
      case ON_ADD_ITEM:
         const newItem = {
            id: ++maxId,
            label: action.payload,
            done: false,
         };
         return {
            ...state,
            items: [...state.items, newItem],
         };
      case ON_FILTER_CHANGE:
         return {
            ...state,
            filter: action.payload,
         };
      default:
         return state;
   }
}
