import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  text: string;
  rating: number;
}

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (): Promise<Review[]> => {
    const response = await fetch('http://localhost:3001/api/reviews');
    return response.json();
  }
);

const entityAdapter = createEntityAdapter<Review>();

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState({
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  }),
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      entityAdapter.addOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch reviews';
      });
  },
  selectors: {
    selectReviewsStatus: (state) => state.status,
  },
});

const selectors = entityAdapter.getSelectors((state: any) => state.reviews);

export const { addReview } = reviewsSlice.actions;
export const { selectReviewsStatus } = reviewsSlice.selectors;
export const selectReviewsIds = selectors.selectIds;
export const selectReviewById = selectors.selectById;
export const selectReviewsEntities = selectors.selectEntities;
export default reviewsSlice.reducer;