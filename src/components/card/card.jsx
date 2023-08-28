import styles from "./card.module.scss";

import location from "../../assets/location.svg";

export const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Тренировка | 25.08.2023</h2>
      <span className={styles.cardSubtitle}>Февраль</span>
      <div className={styles.cardLocation}>
        <img src={location} alt="location" />
        <span className={styles.cardLocationText}>Малорита</span>
      </div>
    </div>
  );
};
