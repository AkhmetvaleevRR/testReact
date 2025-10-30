import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../data/normalized-mock'



const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc: Record<string, any>, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};


const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantsByIds: (state) => state.ids,
    selectRestaurantById: (state, id: string) => state.entities[id],
  },
});

export const { selectRestaurantsByIds, selectRestaurantById } = restaurantsSlice.selectors;
export default restaurantsSlice.reducer;