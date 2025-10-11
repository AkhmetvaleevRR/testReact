import { restaurants } from "../../../data/mock.ts";
import { useState } from "react";
import { RestaurantItem } from "../restaurant/restaurant.tsx";

export const RestaurantPage = () => {
  const [selectedId, setSelectedId] = useState<string>("");

  const selectedRestaurant = selectedId
    ? restaurants.find((item) => item.id === selectedId)
    : restaurants[0];

  const selectedRestaurantName = selectedId
    ? restaurants.find((item) => item.id === selectedId)
    : restaurants[0];

  return (
    <>
      {restaurants.map((restaurant) => (
        <button
          onClick={() => setSelectedId(restaurant.id)}
          key={restaurant.id}
          disabled={selectedRestaurant!.id === restaurant.id}
        >
          {restaurant.name}
        </button>
      ))}
      <RestaurantItem restaurant={selectedRestaurant!} />
    </>
  );
};
