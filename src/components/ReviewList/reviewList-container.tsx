import { useSelector } from "react-redux";
import { useMemo } from "react";
import { selectReviewsEntities } from "../../store/entities/reviews/slice";
import { ReviewList } from "./reviewList";

export const ReviewListContainer = ({ reviews }: { reviews: string[] }) => {
  const reviewsEntities = useSelector(selectReviewsEntities);
  
  const reviewItems = useMemo(() => 
    reviews.map(reviewId => reviewsEntities[reviewId]).filter(Boolean),
    [reviews, reviewsEntities]
  );

  return <ReviewList reviews={reviewItems} />;
};