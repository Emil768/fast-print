import { QuoteType, TotalCPMType } from "../@types";

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

export const getTotalCPM = ({ count, time }: TotalCPMType) => {
  if (time >= 60) {
    const cpm = count.total / Math.floor(time / 60);
    const totalCPM = cpm - count.min / Math.floor(time / 60);
    return totalCPM < 0 ? "not found🙃" : totalCPM;
  } else {
    return "not found🙃";
  }
};
