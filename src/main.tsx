import { createRoot } from "react-dom/client";
import { restaurants } from '../data/mock.ts';
import type { MenuItem, Review } from '../types/restaraunt.ts';

function reviewList(reviews:Review[]) {
  const listItems = reviews.map(reviewItem =>
    <li key={reviewItem.id}>
      {reviewItem.user}: {reviewItem.text}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


function menuList(menu:MenuItem[]) {
  const listItems = menu.map(menuItem =>
    <li key={menuItem.id}>
      {menuItem.name} {menuItem.price}$
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function restaurantList() {
  const listItems = restaurants.map(restaurant =>
    <div key={restaurant.id}>
      <h2>
        {restaurant.name}
      </h2>    
      <h3>
        Menu
      </h3>    
      <ul>{menuList(restaurant.menu)}</ul>
      <h3>
        Reviews
      </h3>    
      <ul>
        {reviewList(restaurant.reviews)}
      </ul>
    </div>
  );

  return (
    listItems
  );
}



const root = document.getElementById("root");

const reactRoot = createRoot(root!);

reactRoot.render(
  restaurantList()
)