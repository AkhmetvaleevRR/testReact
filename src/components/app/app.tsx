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
import { Layout } from "../layout/layout";

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
                    <Route index element={<Navigate to='reviews' />} />
                    <Route path='reviews' element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                </Route>
            </Routes>     
          </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
