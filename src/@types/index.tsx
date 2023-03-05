export type QuoteType = {
  text: string;
  author: string;
};

export type timeType = {
  timeSpeed: string;
  timePrint: {
    max: number;
    default: number;
    min: number;
  };
};
export type QuoteViewType = {
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
};

export type QuoteBlockType = {
  setQuote: React.Dispatch<React.SetStateAction<QuoteType>>;
} & timeType &
  QuoteType;

export type ModalType = {
  children: React.ReactNode;
  active: boolean;
};

export type SettingsViewType = {
  onClickPlus: () => void;
  onClickMinus: () => void;
  onSelectSpeed: (speed: string) => void;
} & timeType;

export type SettingsType = {
  setTimeSpeed: React.Dispatch<React.SetStateAction<string>>;
  setTimePrint: React.Dispatch<
    React.SetStateAction<{
      max: number;
      default: number;
      min: number;
    }>
  >;
} & timeType;
