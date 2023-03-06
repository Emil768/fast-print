import { ResultsType } from "../../@types";
import styles from "./styles.module.scss";

export const Results = ({ count, totalCPM, refreshPrint }: ResultsType) => (
  <div className={styles.results}>
    <h3 className={styles.results__title}>Results</h3>
    <div className={styles.results__content}>
      <div className={styles.results__streak}>
        <div className={styles["results__streak-title"]}>total streak🔥</div>
        <div className={styles["results__streak-number"]}>
          {count.total - 1}
        </div>
      </div>
      <div className={styles.results__streak}>
        <div className={styles["results__streak-title"]}>mistakes❌ </div>
        <div className={styles["results__streak-number"]}>{count.min - 1}</div>
      </div>
      <div className={styles.results__streak}>
        <div className={styles["results__streak-title"]}>CPM🎯</div>
        <div className={styles["results__streak-number"]}>{totalCPM}</div>
      </div>
      <div className={styles.results__streak}>
        <div
          className={[
            styles["results__streak-title"],
            styles.results__button,
          ].join(" ")}
          onClick={refreshPrint}
        >
          New game 🎲
        </div>
      </div>
    </div>
  </div>
);
