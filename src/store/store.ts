import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './entities/restaurants/slice';
import reviewsReducer from './entities/reviews/slice';
import dishesReducer from './entities/dishes/slice';
import usersReducer from './entities/users/slice';
import cartReducer from './entities/cart/slice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: reviewsReducer,
    dishes: dishesReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;