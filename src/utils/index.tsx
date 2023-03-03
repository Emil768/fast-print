import { QuoteType } from "../@types";

export const getRandomQuote = async () => {
  const quotes = await fetch("https://type.fit/api/quotes");
  const quetesData = await quotes.json();

  const randomQuotes: QuoteType =
    quetesData[Math.floor(Math.random() * quetesData.length)];

  return randomQuotes;
};
