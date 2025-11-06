import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../../data/normalized-mock';

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc: Record<string, any>, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id: string) => state.entities[id],
    selectDishesEntities: (state) => state.entities,
  },
});

export const { selectDishesIds, selectDishById, selectDishesEntities } = dishesSlice.selectors;
export default dishesSlice.reducer;