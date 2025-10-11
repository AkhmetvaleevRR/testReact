import type { restaurant } from "../../../types/restaurant";
import { MenuList } from "../menuList/menuList.tsx";
import { ReviewForm } from "../reviewForm/reviewForm.tsx";
import { ReviewList } from "../reviewList/reviewList.tsx";

export const RestaurantItem = ({ restaurant }: { restaurant: restaurant }) => {
  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <MenuList menu={restaurant.menu} />
      <h3>Reviews</h3>
      <ReviewList reviews={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};
