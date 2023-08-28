import styles from "./search.module.scss";

export const Search = () => {
  return (
    <div className={styles.serach}>
      <input
        className={styles.serachInput}
        type="text"
        placeholder="Введит дату тренировки"
      />
      <button className={styles.serachBtn}>Поиск</button>
    </div>
  );
};
