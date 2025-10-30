import { createSlice, createSelector } from "@reduxjs/toolkit";

interface CartState {
  items: Record<string, number>;
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: { payload: string }) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    removeItem: (state, action: { payload: string }) => {
      const id = action.payload;
      if (state.items[id] > 1) {
        state.items[id] -= 1;
      } else {
        delete state.items[id];
      }
    },
  },
  selectors: {
    selectCartItemAmountById: (state: CartState, id: string) => state.items[id] || 0,
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const { selectCartItemAmountById } = cartSlice.selectors;
const selectCartSlice = (state: { cart: CartState }) => state[cartSlice.name];
export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartState) => {
    return Object.keys(cartState.items);
  }
);

export default cartSlice.reducer;
