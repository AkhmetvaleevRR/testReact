import { useParams } from "react-router";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { useSelector } from "react-redux";
import { ReviewListContainer } from "../components/reviewList/reviewList-container";
import type { RootState } from "../store/store";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );

  const { reviews } = restaurant || {};

  if (!restaurantId || !restaurant) {
    return <div>Restaurant not found</div>;
  }

  return reviews?.length ? (
    <ReviewListContainer reviews={reviews} />
  ) : (
    <div>empty review</div>
  );
};