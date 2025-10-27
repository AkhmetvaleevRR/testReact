import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../../data/normalized-mock';

interface DishCount {
  dishId: string;
  count: number;
}

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc: Record<string, any>, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  dishCounts: {} as Record<string, number>,
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    incrementDish: (state, action: PayloadAction<string>) => {
      const dishId = action.payload;
      state.dishCounts[dishId] = (state.dishCounts[dishId] || 0) + 1;
    },
    decrementDish: (state, action: PayloadAction<string>) => {
      const dishId = action.payload;
      if (state.dishCounts[dishId] > 0) {
        state.dishCounts[dishId] -= 1;
      }
    },
    setDishCount: (state, action: PayloadAction<DishCount>) => {
      const { dishId, count } = action.payload;
      state.dishCounts[dishId] = count;
    },
  },
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id: string) => state.entities[id],
    selectDishCount: (state, id: string) => state.dishCounts[id] || 0,
  },
});

export const { incrementDish, decrementDish, setDishCount } = dishesSlice.actions;
export const { selectDishesIds, selectDishById, selectDishCount } = dishesSlice.selectors;
export default dishesSlice.reducer;