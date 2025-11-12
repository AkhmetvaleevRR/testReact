import { useParams, Link } from "react-router";
import { useSelector } from "react-redux";
import { selectDishById, fetchDishById } from "../store/entities/dishes/slice";
import { DishCounterContainer } from "../components/dishCounter/dishCounter-container";
import { Loader } from "../components/loader/loader";
import { useRequest } from "../store/hooks/use-requests";
import type { RootState } from "../store/store";

export const DishPage = () => {
  const { dishId } = useParams();
  
  const dish = useSelector((state: RootState) =>
    dishId ? selectDishById(state, dishId) : null
  );
  
  const { isLoading } = useRequest(fetchDishById, dishId, !dish);

  if (isLoading) return <Loader />;

  if (!dishId || !dish) {
    return <div>Dish not found</div>;
  }

  return (
    <div>
      <Link to="/restaurants" style={{ background: 'transparent', border: 'none', textDecoration: 'none' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </Link>
      <h1>{dish.name}</h1>
      <p>Price: ${dish.price}</p>
      <p>Ingredients: {dish.ingredients.join(", ")}</p>
      <DishCounterContainer max={5} dishId={dish.id} />
    </div>
  );
};