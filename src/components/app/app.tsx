import { Layout } from "../layout/layout";
import { RestaurantPage } from "../restaraunt-page/restaurant-page";
import ScrollProgressBar from "../scrollProgressBar/scrollProgressBar";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { UserProvider } from "../../contexts/UserContext";
import "../../assets/styles/main.css";
import "../../assets/styles/theme.css";

export const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <ScrollProgressBar />
          <RestaurantPage />
          <div>
            <div style={{ height: "2000px" }}>Контент для прокрутки</div>
          </div>
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};
