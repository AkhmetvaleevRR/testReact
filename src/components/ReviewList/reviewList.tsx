import type { Review } from "../../../types/restaraunt";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <>
      {reviews.length && (
        <ul>
          {reviews.map((reviewItem) => (
            <li key={reviewItem.id}>
              {reviewItem.user}: {reviewItem.text}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
