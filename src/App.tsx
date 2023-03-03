import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { QuoteType } from "./@types";
import { Quote } from "./Quote";
import { getRandomQuote } from "./utils";

function App() {
  const [quote, setQuote] = useState<QuoteType>({ text: "", author: "" });

  const onGetRandomQuotes = async () => {
    const randomQuote = await getRandomQuote();
    setQuote(randomQuote);
  };

  useEffect(() => {
    onGetRandomQuotes();
  }, []);

  return (
    <div className={styles.app}>
      <div>
        <Quote {...quote} setQuote={setQuote} />
      </div>
    </div>
  );
}

export default App;
