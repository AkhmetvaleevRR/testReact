import { restaurants } from "../../../data/mock.ts";
import { useState } from "react";
import { RestaurantItem } from "../restaurant/restaurant.tsx";
import { Tab } from "../tab/tab.tsx";

export const RestaurantPage = () => {
  const [selectedId, setSelectedId] = useState("");

  const selectedRestaurant = selectedId
    ? restaurants.find((item) => item.id === selectedId)
    : restaurants[0];

  return (
    <>
      {restaurants.map((restaurant) => (
        <Tab
          key={restaurant.id}
          name={restaurant.name}
          onClick={() => setSelectedId(restaurant.id)}
          isActive={selectedRestaurant!.id === restaurant.id}
        />
      ))}
      <RestaurantItem restaurant={selectedRestaurant!} />
    </>
  );
};
