import React, { useState, useEffect } from "react";
import { QuoteType } from "../../@types";
import { getRandomQuote } from "../../utils";
import settingSound from "../../sounds/settings.mp3";
import useSound from "use-sound";
import { HomeView } from "./HomeView";

export const Home = () => {
  const [quote, setQuote] = useState<QuoteType>({ text: "", author: "" });
  const [modal, setModal] = useState(false);
  const [timePrint, setTimePrint] = useState({
    max: 300,
    default: 60,
    min: 20,
  });
  const [timeSpeed, setTimeSpeed] = useState("normal");
  const [play] = useSound(settingSound);
  const onGetRandomQuotes = async () => {
    const randomQuote = await getRandomQuote();
    setQuote(randomQuote);
  };
  const onToggleModal = () => {
    setModal(!modal);
    play();
  };

  useEffect(() => {
    onGetRandomQuotes();
  }, []);
  return (
    <HomeView
      modal={modal}
      setModal={setModal}
      quote={quote}
      setQuote={setQuote}
      timeSpeed={timeSpeed}
      timePrint={timePrint}
      onToggleModal={onToggleModal}
      setTimeSpeed={setTimeSpeed}
      setTimePrint={setTimePrint}
      focus={modal}
    />
  );
};
