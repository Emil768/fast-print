import { ModalType } from "../../@types";
import styles from "./styles.module.scss";

export const Modal = ({ children, active }: ModalType) => {
  console.log("re-render");
  return (
    <div
      className={
        active ? [styles.modal, styles["modal-active"]].join(" ") : styles.modal
      }
    >
      <div
        className={
          active
            ? [styles.modal__content, styles["modal__content-active"]].join(" ")
            : styles.modal__content
        }
      >
        {children}
      </div>
    </div>
  );
};
