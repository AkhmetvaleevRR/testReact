import { Tabs } from "../components/tabs/tabs";
import { useSelector } from "react-redux";
import {
  selectRestaurantsByIds,
  fetchRestaurants,
} from "../store/entities/restaurants/slice";
import { Outlet } from "react-router";
import { TabContainer } from "../components/tab/tab-container";
import { Loader } from "../components/loader/loader";
import { useRequest } from "../store/hooks/use-requests";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsByIds);
  const { isLoading } = useRequest(fetchRestaurants);

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1>Our Restaurants</h1>

      <Tabs>
        {restaurantsIds.map((id) => (
          <TabContainer key={id} id={String(id)} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
