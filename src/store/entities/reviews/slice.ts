import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async () => {
    const response = await fetch('http://localhost:3001/api/reviews');
    return response.json();
  }
);

const initialState = {
  ids: [] as string[],
  entities: {} as Record<string, any>,
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<any>) => {
      const review = action.payload;
      state.ids.push(review.id);
      state.entities[review.id] = review;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ids = action.payload.map((review: any) => review.id);
        state.entities = action.payload.reduce((acc: Record<string, any>, review: any) => {
          acc[review.id] = review;
          return acc;
        }, {});
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch reviews';
      });
  },
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id: string) => state.entities[id],
    selectReviewsEntities: (state) => state.entities,
    selectReviewsStatus: (state) => state.status,
  },
});

export const { addReview } = reviewsSlice.actions;
export const { selectReviewsIds, selectReviewById, selectReviewsEntities, selectReviewsStatus } = reviewsSlice.selectors;
export default reviewsSlice.reducer;