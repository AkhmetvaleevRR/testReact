import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Restaurant {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

interface Dish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  text: string;
  rating: number;
}

interface User {
  id: string;
  name: string;
}

interface CreateReviewRequest {
  restaurantId: string;
  text: string;
  rating: number;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  tagTypes: ['Restaurant', 'Dish', 'Review', 'User'],
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurants',
      providesTags: ['Restaurant'],
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurants/${id}`,
      providesTags: (_, __, id) => [{ type: 'Restaurant', id }],
    }),
    getDishes: builder.query<Dish[], void>({
      query: () => 'dishes',
      providesTags: ['Dish'],
    }),
    getDishById: builder.query<Dish, string>({
      query: (id) => `dish/${id}`,
      providesTags: (_, __, id) => [{ type: 'Dish', id }],
    }),
    getReviews: builder.query<Review[], void>({
      query: () => 'reviews',
      providesTags: ['Review'],
    }),
    getReviewsByRestaurantId: builder.query<Review[], string>({
      query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
      providesTags: (_, __, restaurantId) => [{ type: 'Review', id: restaurantId }],
    }),
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: ['User'],
    }),
    createReview: builder.mutation<Review, CreateReviewRequest>({
      query: (review) => ({
        url: 'reviews',
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesQuery,
  useGetDishByIdQuery,
  useGetReviewsQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
} = api;