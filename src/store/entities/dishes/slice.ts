import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

interface Dish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async (): Promise<Dish[]> => {
    const response = await fetch('http://localhost:3001/api/dishes');
    return response.json();
  }
);

const entityAdapter = createEntityAdapter<Dish>();

const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch dishes';
      });
  },
  selectors: {
    selectDishesStatus: (state) => state.status,
  },
});

const selectors = entityAdapter.getSelectors((state: any) => state.dishes);

export const { selectDishesStatus } = dishesSlice.selectors;
export const selectDishesIds = selectors.selectIds;
export const selectDishById = selectors.selectById;
export const selectDishesEntities = selectors.selectEntities;
export default dishesSlice.reducer;