import { useEffect, useState, useRef } from "react";
import { QuoteBlockType, SpeedIntervalType } from "../../@types";
import { getRandomQuote } from "../../utils";

import { QuoteView } from "./QuoteView";

export const Quote = ({
  text,
  author,
  setQuote,
  timePrint,
  timeSpeed,
  focus,
}: QuoteBlockType) => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [activeLetter, setActiveLetter] = useState(0);
  const [count, setCount] = useState({
    max: 0,
    min: 0,
    total: 1,
  });
  const [startPrint, setStartPrint] = useState(false);
  const [counter, setCounter] = useState(timePrint.default);
  const textRef = useRef<HTMLDivElement>(null);
  const textQuote = text.split(" ");
  const currentQuote = textQuote[activeQuote];
  const currentLetter = currentQuote.split("")[activeLetter];
  const speedInterval: SpeedIntervalType = {
    easy: 1500,
    normal: 1000,
    hard: 450,
  };

  const onChangeText = async () => {
    if (textRef.current?.textContent) {
      if (textRef.current?.textContent !== "") {
        setStartPrint(true);
        if (textRef.current?.textContent.trim() === currentLetter) {
          textRef.current!.innerText = "";
          setCount((prev) => ({
            ...prev,
            max: prev.max + 1,
          }));
          setActiveLetter((prev) => prev + 1);

          if (activeLetter === currentQuote.split("").length - 1) {
            setActiveQuote((prev) => prev + 1);
            setActiveLetter(0);
            textRef.current!.innerText = "";
          }
        } else {
          textRef.current!.innerText = "";
          setCount((prev) => ({
            max: 0,
            min: prev.min + 1,
            total: (prev.total += prev.max),
          }));
        }

        if (activeQuote === textQuote.length - 1) {
          if (activeLetter === textQuote[activeQuote].split("").length - 1) {
            textRef.current!.innerText = "";
            setActiveQuote(0);
            const randomQuote = await getRandomQuote();
            setQuote(randomQuote);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (startPrint) {
      const interval = setInterval(() => {
        if (counter < 1) {
          setCounter(0);
          setCount((prev) => ({
            ...prev,
            total: (prev.total += prev.max),
          }));
          setStartPrint(false);
        } else {
          setCounter((prev) => prev - 1);
        }
      }, speedInterval[timeSpeed]);

      return () => {
        clearInterval(interval);
      };
    }
  }, [startPrint, counter, timePrint, timeSpeed]);

  useEffect(() => {
    if (!focus) {
      if (textRef.current) {
        textRef.current.focus();
      }
    }
  }, [textRef, focus]);

  return (
    <QuoteView
      textQuote={textQuote}
      activeQuote={activeQuote}
      activeLetter={activeLetter}
      author={author}
      onChangeText={onChangeText}
      counter={counter}
      count={count}
      textRef={textRef}
    />
  );
};
