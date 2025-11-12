import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async () => {
    const response = await fetch('http://localhost:3001/api/dishes');
    return response.json();
  }
);

const initialState = {
  ids: [] as string[],
  entities: {} as Record<string, any>,
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ids = action.payload.map((dish: any) => dish.id);
        state.entities = action.payload.reduce((acc: Record<string, any>, dish: any) => {
          acc[dish.id] = dish;
          return acc;
        }, {});
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch dishes';
      });
  },
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id: string) => state.entities[id],
    selectDishesEntities: (state) => state.entities,
    selectDishesStatus: (state) => state.status,
  },
});

export const { selectDishesIds, selectDishById, selectDishesEntities, selectDishesStatus } = dishesSlice.selectors;
export default dishesSlice.reducer;