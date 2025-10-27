import { Layout } from "../layout/layout";
import { RestaurantPage } from "../restaraunt-page/restaurant-page";
import ScrollProgressBar from "../scrollProgressBar/scrollProgressBar";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import "../../assets/styles/main.css";
import "../../assets/styles/theme.css";
import styles from "./app.module.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <ScrollProgressBar />
          <RestaurantPage />
          <div className={styles.scrollContent}>
            Контент для прокрутки
          </div>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};
