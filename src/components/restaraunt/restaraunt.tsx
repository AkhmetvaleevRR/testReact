import type { MenuItem, Review, Restaraunt} from '../../../types/restaraunt.ts';
import { Counter } from '../counter/counter.tsx';

export const RestarauntItem = ({ restaraunt }: { restaraunt: Restaraunt }) => {
  function ReviewList(reviews:Review[]) {
    return (
    <>
      {reviews.length && (
        <ul>
          {reviews.map(reviewItem => (
            <li key={reviewItem.id}>
              {reviewItem.user}: {reviewItem.text}
            </li>
          ))}
        </ul>
      )}
      </>
    );
  }


  function MenuList(menu:MenuItem[]) {
    return ( 
    <>
      {menu.length && (
        <ul>
          {menu.map(menuItem => (
            <li key={menuItem.id}>
              {menuItem.name} {menuItem.price}$          
              <Counter max={5}/>
            </li>
          ))}
        </ul>
      )}
      </>
    )
  }

  return (
    <div key={restaraunt.id}>
      <h2>
        {restaraunt.name}
      </h2>    
      <h3>
        Menu
      </h3>    
      <ul>{MenuList(restaraunt.menu)}</ul>
      <h3>
        Reviews
      </h3>    
      <ul>
        {ReviewList(restaraunt.reviews)}
      </ul>
    </div>
  )
}