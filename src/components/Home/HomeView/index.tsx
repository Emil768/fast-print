import { Settings } from "../../Settings";
import { Quote } from "../../Quote";
import { Modal } from "../../Modal";
import styles from "./styles.module.scss";
import { HomeViewType } from "../../../@types";

export const HomeView = ({
  onToggleModal,
  modal,
  setModal,
  timePrint,
  timeSpeed,
  setQuote,
  setTimePrint,
  setTimeSpeed,
  quote,
}: HomeViewType) => {
  return (
    <div className={styles.app}>
      <div className={styles.app__content}>
        <h3 className={styles.app__settings} onClick={onToggleModal}>
          ⚙️
        </h3>
        <Modal modal={modal} setModal={setModal} type="default">
          <Settings
            timeSpeed={timeSpeed}
            timePrint={timePrint}
            setTimeSpeed={setTimeSpeed}
            setTimePrint={setTimePrint}
          />
        </Modal>
        <Quote
          {...quote}
          setQuote={setQuote}
          timeSpeed={timeSpeed}
          timePrint={timePrint}
          focus={modal}
        />
      </div>
    </div>
  );
};
