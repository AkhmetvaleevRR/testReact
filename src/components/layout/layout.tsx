import type { PropsWithChildren } from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
