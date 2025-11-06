import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../data/normalized-mock'



const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc: Record<string, any>, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  activeRestaurantId: normalizedRestaurants[0]?.id || null,
};


const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setActiveRestaurant: (state, action: { payload: string }) => {
      state.activeRestaurantId = action.payload;
    },
  },
  selectors: {
    selectRestaurantsByIds: (state) => state.ids,
    selectRestaurantById: (state, id: string) => state.entities[id],
    selectActiveRestaurantId: (state) => state.activeRestaurantId,
  },
});

export const { setActiveRestaurant } = restaurantsSlice.actions;
export const { selectRestaurantsByIds, selectRestaurantById, selectActiveRestaurantId } = restaurantsSlice.selectors;
export default restaurantsSlice.reducer;