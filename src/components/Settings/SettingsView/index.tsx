import { SettingsType, SettingsViewType } from "../../../@types";
import styles from "./styles.module.scss";

export const SettingsView = ({
  onSelectSpeed,
  onClickPlus,
  onClickMinus,
  timeSpeed,
  timePrint,
}: SettingsViewType) => (
  <div className={styles.settings}>
    <div className={styles.settings__content}>
      <h3 className={styles.settings__title}>Settings</h3>
      <div className={styles.settings__category}>
        <h4 className={styles["settings__category-title"]}>{`time(sec.)⏱️`}</h4>
        <div className={styles["settings__category-info"]}>
          <span
            className={styles["settings__category-plus"]}
            onClick={onClickPlus}
          >
            +
          </span>
          <span className={styles["settings__category-number"]}>
            {timePrint.default}
          </span>
          <span
            className={styles["settings__category-minus"]}
            onClick={onClickMinus}
          >
            -
          </span>
        </div>
      </div>
      <div className={styles.settings__category}>
        <h4 className={styles["settings__category-title"]}>speed 🎲</h4>
        <div className={styles["settings__category-info"]}>
          <span
            className={
              timeSpeed === "easy"
                ? [
                    styles["settings__category-speed"],
                    styles["settings__category-easy"],
                    styles["easy-active"],
                  ].join(" ")
                : [
                    styles["settings__category-speed"],
                    styles["settings__category-easy"],
                  ].join(" ")
            }
            onClick={() => onSelectSpeed("easy")}
          >
            easy 😃
          </span>
          <span
            className={
              timeSpeed === "normal"
                ? [
                    styles["settings__category-speed"],
                    styles["settings__category-normal"],
                    styles["normal-active"],
                  ].join(" ")
                : [
                    styles["settings__category-speed"],
                    styles["settings__category-normal"],
                  ].join(" ")
            }
            onClick={() => onSelectSpeed("normal")}
          >
            normal 🙂
          </span>
          <span
            className={
              timeSpeed === "hard"
                ? [
                    styles["settings__category-speed"],
                    styles["settings__category-hard"],
                    styles["hard-active"],
                  ].join(" ")
                : [
                    styles["settings__category-speed"],
                    styles["settings__category-hard"],
                  ].join(" ")
            }
            onClick={() => onSelectSpeed("hard")}
          >
            hard 🙃
          </span>
        </div>
      </div>
    </div>
  </div>
);
