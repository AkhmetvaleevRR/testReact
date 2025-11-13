import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { fetchDishes } from "../store/entities/dishes/slice";
import { MenuListContainer } from "../components/menuList/menuList-container";
import { Loader } from "../components/loader/loader";
import { useRequest } from "../store/hooks/use-requests";
import type { RootState } from "../store/store";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) =>
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );
  const { isLoading } = useRequest(fetchDishes);

  if (isLoading) return <Loader />;

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