import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { selectDishesStatus, fetchDishes } from "../store/entities/dishes/slice";
import { MenuListContainer } from "../components/menuList/menuList-container";
import { Loader } from "../components/loader/loader";
import type { RootState, AppDispatch } from "../store/store";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  
  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );

  const dishesStatus = useSelector(selectDishesStatus);

  useEffect(() => {
    if (dishesStatus === 'idle') {
      dispatch(fetchDishes());
    }
  }, [dispatch, dishesStatus]);

  if (dishesStatus === "loading") return <Loader />;
  if (dishesStatus === "failed") return "Error loading menu";

  if (!restaurantId || !restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h2>Menu</h2>
      <MenuListContainer menu={restaurant.menu} />
    </div>
  );
};