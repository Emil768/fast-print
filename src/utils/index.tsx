import { QuoteType } from "../@types";

export const getRandomQuote = async () => {
  try {
    const quotes = await fetch("https://type.fit/api/quotes");
    const quetesData: QuoteType[] = await quotes.json();

    const randomQuotes: QuoteType =
      quetesData[Math.floor(Math.random() * quetesData.length)];

    return randomQuotes;
  } catch (err) {
    console.log(err);
    return {
      text: "not found",
      author: "not found",
    };
  }
};
