import { Outlet } from "react-router-dom";
import { Header } from "../header/header";

import styles from "./layout.module.scss";

export const Layouts = () => {
  return (
    <div>
      <div className={styles.bg}>
        <div className="container">
          <Header />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
