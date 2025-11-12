import { useParams, Link } from "react-router";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { selectIsAuthenticated, fetchUsers } from "../store/entities/users/slice";
import { fetchReviews } from "../store/entities/reviews/slice";
import { useSelector } from "react-redux";
import { ReviewListContainer } from "../components/reviewList/reviewList-container";
import { Loader } from "../components/loader/loader";
import { useRequest } from "../store/hooks/use-requests";
import type { RootState } from "../store/store";
import styles from "./reviews-page.module.css";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );

  const { isLoading: reviewsLoading } = useRequest(fetchReviews);
  const { isLoading: usersLoading } = useRequest(fetchUsers);

  if (reviewsLoading || usersLoading) return <Loader />;

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