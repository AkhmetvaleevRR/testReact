import { useSelector } from "react-redux";
import { useMemo } from "react";
import { selectUsersEntities } from "../../store/entities/users/slice";

export function ReviewList({ reviews }: { reviews: any[] }) {
  const users = useSelector(selectUsersEntities);
  
  const reviewsWithUsers = useMemo(() => 
    reviews.map(review => ({
      ...review,
      userName: users[review.userId]?.name || review.userId
    })),
    [reviews, users]
  );

  return (
    <ul>
      {reviewsWithUsers.length > 0 &&
        reviewsWithUsers.map((reviewItem) => (
          <li key={reviewItem.id}>
            {reviewItem.userName}: {reviewItem.text}
          </li>
        ))}
    </ul>
  );
}
