import { Layout } from "../layout/layout";
import { RestaurantPage } from "../restaraunt-page/restaurant-page";
import ScrollProgressBar from "../scrollProgressBar/scrollProgressBar";

export const App = () => {
  return (
    <Layout>
      <ScrollProgressBar />
      <RestaurantPage />
      <div>
        <div style={{ height: "2000px" }}>Контент для прокрутки</div>
      </div>
    </Layout>
  );
};
