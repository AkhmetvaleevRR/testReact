import { restaurants } from "../../../data/mock.ts";
import { useMemo, useState } from "react";
import { RestaurantItem } from "../restaurant/restaurant.tsx";
import { Tab } from "../tab/tab.tsx";
import styles from "./restaurant-page.module.css";

export const RestaurantPage = () => {
  const [selectedId, setSelectedId] = useState("");

 const selectedRestaurant = useMemo(() => 
  selectedId 
    ? restaurants.find((item) => item.id === selectedId)
    : restaurants[0]
, [selectedId]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {restaurants.map((restaurant) => (
          <Tab
            key={restaurant.id}
            name={restaurant.name}
            onClick={() => setSelectedId(restaurant.id)}
            isActive={selectedRestaurant!.id === restaurant.id}
          />
        ))}
      </div>
      <RestaurantItem restaurant={selectedRestaurant!} />
    </div>
  );
};
