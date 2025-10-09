import type { Restaraunt } from "../../../types/restaraunt.ts";
import { MenuList } from "../menuList/menuList.tsx";
import { ReviewList } from "../ReviewList/reviewList.tsx";

export const RestarauntItem = ({ restaraunt }: { restaraunt: Restaraunt }) => {
  return (
    <div key={restaraunt.id}>
      <h2>{restaraunt.name}</h2>
      <h3>Menu</h3>
      <ul><MenuList menu={restaraunt.menu} /></ul>
      <h3>Reviews</h3>
      <ul><ReviewList reviews={restaraunt.reviews} /></ul>
    </div>
  );
};
