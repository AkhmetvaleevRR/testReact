import { Tabs } from "../components/tabs/tabs";
import { useSelector } from "react-redux";
import {
  selectRestaurantsByIds,
} from "../store/entities/restaurants/slice";
import { Outlet } from "react-router";
import { TabContainer } from "../components/tab/tab-container";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsByIds);

  return (
    <div>
      <h1>Our Restaurants</h1>

      <Tabs>
        {restaurantsIds.map((id) => (
          <TabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};