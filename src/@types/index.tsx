export interface QuoteType {
  text: string;
  author: string;
}
export interface QuoteViewType {
  textQuote: string[];
  activeQuote: number;
  activeLetter: number;
  author: string;
  onChangeText: () => void;
  counter: number;
  count: {
    max: number;
    min: number;
    total: number;
  };
  textRef: React.RefObject<HTMLDivElement>;
}
