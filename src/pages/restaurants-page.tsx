import { useEffect } from "react";
import { Tabs } from "../components/tabs/tabs";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRestaurantsByIds,
  selectRestaurantsStatus,
  fetchRestaurants,
} from "../store/entities/restaurants/slice";
import { Outlet } from "react-router";
import { TabContainer } from "../components/tab/tab-container";
import { Loader } from "../components/loader/loader";
import type { AppDispatch } from "../store/store";

export const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurantsIds = useSelector(selectRestaurantsByIds);
  const status = useSelector(selectRestaurantsStatus);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (status === "loading") return <Loader />;
  if (status === "failed") return "Error loading restaurants";

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
