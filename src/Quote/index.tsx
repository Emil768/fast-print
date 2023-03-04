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
  const [activeLetter, setActiveLetter] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const [startPrint, setStartPrint] = useState(false);
  const [counter, setCounter] = useState(10);

  const onChangeText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    if (value !== "") {
      setStartPrint(true);
      if (
        value.trim() === text.split(" ")[activeQuote].split("")[activeLetter]
      ) {
        setCount((prev) => prev + 1);
        setActiveLetter((prev) => prev + 1);
        setSearchText("");
        setCounter((prev) => prev + 1);
        if (
          activeLetter ===
          text.split(" ")[activeQuote].split("").length - 1
        ) {
          setActiveQuote((prev) => prev + 1);
          setActiveLetter(0);
          setSearchText("");
        }
      } else {
        setCount(0);
      }

      if (activeQuote === text.split(" ").length - 1) {
        if (
          activeLetter ===
          text.split(" ")[activeQuote].split("").length - 1
        ) {
          const randomQuote = await getRandomQuote();
          setQuote(randomQuote);
          setSearchText("");
          setActiveQuote(0);
        }
      }
    }
  };

  useEffect(() => {
    if (startPrint) {
      const interval = setInterval(() => {
        if (counter < 1) {
          setCounter(0);
          setStartPrint(false);
        } else {
          setCounter((prev) => prev - 1);
        }
        console.log("interval");
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [startPrint, counter]);

  return (
    <div className={styles.quote}>
      <h3 className={styles.quote__title}>Finished quotes</h3>
      <div className={styles.quote__content}>
        {text.split(" ").map((item, index) => {
          return (
            <div className={styles.quote__word} key={index}>
              {activeQuote === index
                ? item.split("").map((item, index) => {
                    return (
                      <span
                        className={
                          activeLetter === index
                            ? [
                                styles.quote__letter,
                                styles["quote__letter-active"],
                              ].join(" ")
                            : styles.quote__letter
                        }
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  })
                : item.split("").map((item, index) => {
                    return (
                      <span className={styles.quote__letter} key={index}>
                        {item}
                      </span>
                    );
                  })}
            </div>
          );
        })}
      </div>

      <input
        type="text"
        value={searchText}
        onChange={onChangeText}
        autoFocus={true}
      />
      <div className={styles.quote__info}>
        <div>{count}</div>
        <span>{counter}</span>
      </div>
    </div>
  );
};
