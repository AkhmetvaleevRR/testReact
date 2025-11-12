import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { selectIsAuthenticated, selectUsersStatus, fetchUsers } from "../store/entities/users/slice";
import { selectReviewsStatus, fetchReviews } from "../store/entities/reviews/slice";
import { useSelector, useDispatch } from "react-redux";
import { ReviewListContainer } from "../components/reviewList/reviewList-container";
import type { RootState, AppDispatch } from "../store/store";
import styles from "./reviews-page.module.css";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );

  const reviewsStatus = useSelector(selectReviewsStatus);
  const usersStatus = useSelector(selectUsersStatus);

  useEffect(() => {
    if (reviewsStatus === 'idle') {
      dispatch(fetchReviews());
    }
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, reviewsStatus, usersStatus]);

  if (reviewsStatus === "loading" || usersStatus === "loading") return "Loading...";
  if (reviewsStatus === "failed" || usersStatus === "failed") return "Error loading reviews";

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