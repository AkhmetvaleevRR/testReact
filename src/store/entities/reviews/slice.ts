import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../../data/normalized-mock';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc: Record<string, any>, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
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
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id: string) => state.entities[id],
  },
});

export const { addReview } = reviewsSlice.actions;
export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
export default reviewsSlice.reducer;