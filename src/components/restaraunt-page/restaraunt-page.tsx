import { restaurants } from "../../../data/mock.ts";
import { useState } from "react";
import { RestarauntItem } from "../restaraunt/restaraunt.tsx";

export const RestaurantPage = () => {
  const [selectedId, setSelectedId] = useState<string>("");

  const selectedRestaurant = selectedId
    ? restaurants.find((item) => item.id === selectedId)
    : restaurants[0];

  return (
    <>
      {restaurants.map((restaraunt) => (
        <button
          onClick={() => setSelectedId(restaraunt.id)}
          key={restaraunt.id}
        >
          {restaraunt.name}
        </button>
      ))}
      <RestarauntItem restaraunt={selectedRestaurant!} />
    </>
  );
};
