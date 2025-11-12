import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

interface Restaurant {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async (): Promise<Restaurant[]> => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    return response.json();
  }
);

const entityAdapter = createEntityAdapter<Restaurant>();

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({
    activeRestaurantId: null as string | null,
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  }),
  reducers: {
    setActiveRestaurant: (state, action: { payload: string }) => {
      state.activeRestaurantId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        entityAdapter.setAll(state, action.payload);
        if (!state.activeRestaurantId && action.payload.length > 0) {
          state.activeRestaurantId = action.payload[0].id;
        }
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch restaurants';
      });
  },
  selectors: {
    selectRestaurantsByIds: (state) => state.ids,
    selectRestaurantById: (state, id: string) => state.entities[id],
    selectActiveRestaurantId: (state) => state.activeRestaurantId,
    selectRestaurantsStatus: (state) => state.status,
  },
});
export const { setActiveRestaurant } = restaurantsSlice.actions;
export const { selectActiveRestaurantId, selectRestaurantsStatus, selectRestaurantsByIds, selectRestaurantById } = restaurantsSlice.selectors;
export default restaurantsSlice.reducer;