import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/entities/users/slice";

import { Outlet } from "react-router";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import ScrollProgressBar from "../components/scrollProgressBar/scrollProgressBar";
import { CartContainer } from "../components/cart/cart-container";

export const RestaurantLayout = ({}) => {
 const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <Header/>
      <ScrollProgressBar /> 
      <Outlet />
      {isAuthenticated && <CartContainer />}
      <Footer />
    </>
  );
};
