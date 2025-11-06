
import classNames from "classnames";
import { NavLink } from "react-router";
import type { ReactNode } from "react";

import styles from "./tab-link.module.css";

export const TabLink = ({ children, to }: { children: ReactNode; to: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.isActive]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};
