import { ModalType } from "../../@types";
import closeSound from "../../sounds/close.mp3";
import useSound from "use-sound";
import styles from "./styles.module.scss";

export const Modal = ({ children, modal, setModal, type }: ModalType) => {
  const [play] = useSound(closeSound);
  const onToggleModal = () => {
    setModal(!modal);
    play();
  };
  return (
    <div
      className={
        modal ? [styles.modal, styles["modal-active"]].join(" ") : styles.modal
      }
    >
      <div
        className={
          modal
            ? [styles.modal__content, styles["modal__content-active"]].join(" ")
            : styles.modal__content
        }
      >
        {type === "private" ? null : (
          <div className={styles.modal__close} onClick={onToggleModal}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </div>
        )}
        {children}
      </div>
      <div
        className={styles.modal__overlay}
        onClick={() => (type === "private" ? setModal(true) : setModal(!modal))}
      ></div>
    </div>
  );
};
