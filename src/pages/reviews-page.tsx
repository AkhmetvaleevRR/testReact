import { useParams, Link } from "react-router";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { selectIsAuthenticated } from "../store/entities/users/slice";
import { useSelector } from "react-redux";
import { ReviewListContainer } from "../components/reviewList/reviewList-container";
import type { RootState } from "../store/store";
import styles from "./reviews-page.module.css";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );

  const { reviews } = restaurant || {};

  if (!restaurantId || !restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      {reviews?.length ? (
        <ReviewListContainer reviews={reviews} />
      ) : (
        <div>No reviews yet</div>
      )}
      {isAuthenticated && (
        <Link to={`/add-review/${restaurantId}`} className={styles.addReviewButton}>
          Add Review
        </Link>
      )}
    </div>
  );
};