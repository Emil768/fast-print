import { useEffect, useState, useRef } from "react";
import { QuoteBlockType, SpeedIntervalType } from "../../@types";
import { getRandomQuote, getTotalCPM } from "../../utils";
import { Modal } from "../Modal";
import { Results } from "../Results";
import closeSound from "../../sounds/close.mp3";
import notificationSound from "../../sounds/notification.mp3";
import useSound from "use-sound";
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
    min: 1,
    total: 1,
  });
  const [startPrint, setStartPrint] = useState(false);
  const [counter, setCounter] = useState(60);
  const [modal, setModal] = useState(false);
  const [play] = useSound(closeSound);
  const [notification] = useSound(notificationSound);
  const textRef = useRef<HTMLDivElement>(null);
  const totalCPM = getTotalCPM({ count, time: timePrint.default });
  const speedInterval: SpeedIntervalType = {
    easy: 1500,
    normal: 1000,
    hard: 450,
  };
  const textQuote = text.split(" ");
  const currentQuote = textQuote[activeQuote];
  const currentLetter = currentQuote.split("")[activeLetter];
  const animateFlame = count.max >= 10 ? "quote__flame-animate" : "";
  const animateTime = counter <= 20 ? "quote__time-animate" : "";

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

  const refreshPrint = () => {
    setCount({
      max: 0,
      min: 1,
      total: 1,
    });
    setCounter(timePrint.default);
    setModal(false);
    setActiveQuote(0);
    setActiveLetter(0);
    play();
  };

  useEffect(() => {
    if (startPrint) {
      const interval = setInterval(() => {
        if (counter < 1) {
          setStartPrint(false);
          setCounter(0);
          setModal(true);
          setCount((prev) => ({
            ...prev,
            total: (prev.total += prev.max),
          }));
          notification();
        } else {
          setCounter((prev) => prev - 1);
        }
      }, speedInterval[timeSpeed]);

      return () => {
        clearInterval(interval);
      };
    }
  }, [startPrint, counter, timeSpeed]);

  useEffect(() => {
    if (!focus) {
      setCounter(timePrint.default);
      if (textRef.current) {
        textRef.current.focus();
      }
    }
    if (modal) {
      textRef.current?.blur();
    }
  }, [textRef, focus, modal, timePrint.default]);

  return (
    <>
      <QuoteView
        textQuote={textQuote}
        activeQuote={activeQuote}
        activeLetter={activeLetter}
        author={author}
        onChangeText={onChangeText}
        counter={counter}
        count={count}
        textRef={textRef}
        animateFlame={animateFlame}
        animateTime={animateTime}
      />
      <Modal modal={modal} setModal={setModal} type="private">
        <Results
          count={count}
          totalCPM={totalCPM}
          refreshPrint={refreshPrint}
        />
      </Modal>
    </>
  );
};
