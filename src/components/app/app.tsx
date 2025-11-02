import { RestaurantPage } from "../../pages/restaurant-page";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import "../../assets/styles/main.css";
import "../../assets/styles/theme.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { RestaurantLayout } from "../../layouts/restaurant-layout";
import { RestaurantsPage } from "../../pages/restaurants-page";
import { RestaurantReviewsPage } from "../../pages/reviews-page";
import { MenuPage } from "../../pages/menu-page";
import { DishPage } from "../../pages/dish-page";
import { AddReviewPage } from "../../pages/add-review-page";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
          <BrowserRouter>     
            <Routes>
              <Route element={<RestaurantLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/restaurants' element={<RestaurantsPage />}>
                  <Route path=':restaurantId' element={<RestaurantPage />}>
                    <Route index element={<Navigate to='menu' />} />
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                <Route path='/dish/:dishId' element={<DishPage />} />
                <Route path='/add-review/:restaurantId' element={<AddReviewPage />} />
                </Route>
            </Routes>     
          </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
