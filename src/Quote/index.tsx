import { useEffect, useState, useCallback } from "react";
import { QuoteType } from "../@types";
import { getRandomQuote } from "../utils";
import { QuoteWord } from "./QuoteWord";
import debounce from "lodash.debounce";
import styles from "./styles.module.scss";

interface QuoteBlock extends QuoteType {
  setQuote: React.Dispatch<React.SetStateAction<QuoteType>>;
}

export const Quote = ({ text, author, setQuote }: QuoteBlock) => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [activeLetter, setActiveLetter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(0);
  const [counter, setCounter] = useState(59);

  const onChangeText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === text.split(" ")[activeQuote]) {
      setActiveQuote((prev) => prev + 1);
      setSearchText("");
      setCount((prev) => prev + 1);
      if (text.split(" ").length - 1 === activeQuote) {
        const randomQuote = await getRandomQuote();
        setQuote(randomQuote);
        setActiveQuote(0);
      }
    } else {
      setCount(0);
    }
  };

  return (
    <div className={styles.quote}>
      <div>
        {text.split(" ").map((item, index) => {
          return (
            <span
              className={
                index === activeQuote
                  ? [styles.quote__word, styles["quote__word-active"]].join(" ")
                  : styles.quote__word
              }
              key={index}
            >
              {item}
            </span>
          );
        })}
      </div>

      <input type="text" value={searchText} onChange={onChangeText} />
      <div>streak: {count}</div>
      <div>{counter}</div>
    </div>
  );
};
