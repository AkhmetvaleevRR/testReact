import { useParams, Link } from "react-router";
import { ReviewForm } from "../components/reviewForm/reviewForm";

export const AddReviewPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <Link to={`/restaurants/${restaurantId}/reviews`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </Link>
      <h1>Add Review</h1>
      <ReviewForm />
    </div>
  );
};