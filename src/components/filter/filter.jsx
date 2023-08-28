import { Checkbox } from "@mantine/core";
import styles from "./filter.module.scss";

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader}>
        <h5 className={styles.filterTitle}>Фильтры</h5>
        <span className={styles.filterReset}>Сбросить все</span>
      </div>

      <div className={styles.filterTags}>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </div>

      <button className={styles.filterBtn}>Применить</button>
    </div>
  );
};
