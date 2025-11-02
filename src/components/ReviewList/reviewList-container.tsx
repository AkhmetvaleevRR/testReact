import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ReviewList } from "./reviewList";
import type { RootState } from "../../store/store";

export const ReviewListContainer = ({ reviews }: { reviews: string[] }) => {
  const reviewsEntities = useSelector((state: RootState) => state.reviews.entities);
  
  const reviewItems = useMemo(() => 
    reviews.map(reviewId => reviewsEntities[reviewId]).filter(Boolean),
    [reviews, reviewsEntities]
  );

  return <ReviewList reviews={reviewItems} />;
};