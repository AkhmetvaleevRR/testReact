import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  itemsIds: string[];
}

const initialState: CartState = {
  itemsIds: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemsIds.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.itemsIds.indexOf(action.payload);
      if (index > -1) {
        state.itemsIds.splice(index, 1);
      }
    },
  },
  selectors: {
    selectCartItemsIds: (state) => state.itemsIds,
    selectCartItemAmountById: (state, id: string) => 
      state.itemsIds.filter(itemId => itemId === id).length
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const { selectCartItemsIds, selectCartItemAmountById } = cartSlice.selectors;

export default cartSlice.reducer;
