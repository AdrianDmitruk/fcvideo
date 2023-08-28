import { Card } from "../../components/card/card";
import { Filter } from "../../components/filter/filter";
import { Search } from "../../components/search/search";
import styles from "./mainPage.module.scss";

export const MainPage = () => {
  return (
    <div className="container">
      <main className={styles.main}>
        <Filter />
        <div className={styles.mainContent}>
          <Search />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};
