import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { QuoteType } from "./@types";
import { getRandomQuote } from "./utils";
import { Settings } from "./components/Settings";
import { Quote } from "./components/Quote";
import { Modal } from "./components/Modal";

function App() {
  const [quote, setQuote] = useState<QuoteType>({ text: "", author: "" });
  const [modal, setModal] = useState(false);
  const [timePrint, setTimePrint] = useState({
    max: 300,
    default: 60,
    min: 10,
  });
  const [timeSpeed, setTimeSpeed] = useState("easy");
  const onGetRandomQuotes = async () => {
    const randomQuote = await getRandomQuote();
    setQuote(randomQuote);
  };
  const onToggleModal = () => setModal(!modal);

  useEffect(() => {
    onGetRandomQuotes();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.app__content}>
        <h3 className={styles.app__settings} onClick={onToggleModal}>
          ⚙️
        </h3>
        <Modal modal={modal} setModal={setModal}>
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
}

export default App;
