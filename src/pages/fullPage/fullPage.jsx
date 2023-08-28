import styles from "./fullPage.module.scss";
import YouTube from "react-youtube";
import location from "../../assets/location.svg";

export const FullPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Тренировка | 25.08.2023</h2>
        <span className={styles.pageSubtitle}>Февраль</span>
        <div className={styles.pageLocation}>
          <img src={location} alt="location" />
          <span className={styles.pageLocationText}>Малорита</span>
        </div>
      </div>
      <div className={styles.pageMain}>
        <div className={styles.pageBlock}>
          <h3 className={styles.pageBlockTitle}>1 упр:</h3>
          <div className={styles.pageBlockVideo}>
            <YouTube
              videoId="9r1VgPJIQy4"
              width="560"
              height="315"
              title="YouTube video player"
            />
            {/* <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/W_3KTqFmsO4?si=MW4hkZljNNpAbx4j"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
          </div>

          <button className={styles.pageBtn}>Скачать</button>
        </div>
        <div className={styles.pageBlock}>
          <h3 className={styles.pageBlockTitle}>1 упр:</h3>
          <div className={styles.pageBlockVideo}>
            <YouTube
              videoId="9r1VgPJIQy4"
              width="560"
              height="315"
              title="YouTube video player"
            />
          </div>
          <button className={styles.pageBtn}>Скачать</button>
        </div>
        <div className={styles.pageBlock}>
          <h3 className={styles.pageBlockTitle}>1 упр:</h3>
          <div className={styles.pageBlockVideo}>
            <YouTube
              videoId="9r1VgPJIQy4"
              width="560"
              height="315"
              title="YouTube video player"
            />
          </div>
          <button className={styles.pageBtn}>Скачать</button>
        </div>
      </div>
    </div>
  );
};
