import type { Review } from "../../../types/restaurant";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map((reviewItem) => (
          <li key={reviewItem.id}>
            {reviewItem.user}: {reviewItem.text}
          </li>
        ))}
    </ul>
  );
}
