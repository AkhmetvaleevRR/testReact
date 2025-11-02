import { RestaurantPage } from "../../pages/restaurant-page";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import "../../assets/styles/main.css";
import "../../assets/styles/theme.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { RestaurantLayout } from "../../layouts/restaurant-layout";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
          <BrowserRouter>     
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path='/restaurants' element={<RestaurantLayout />}>
                <Route path=':restaurantId/:category?' element={<RestaurantPage />} />
              </Route>
              <Route index element={<HomePage />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>     
          </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
