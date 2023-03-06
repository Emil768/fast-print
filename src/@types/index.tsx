export type QuoteType = {
  text: string;
  author: string;
};

export type CountType = {
  max: number;
  min: number;
  total: number;
};

export type TotalCPMType = {
  count: CountType;
  time: number;
};

export type ResultsType = {
  count: CountType;
  totalCPM: number | string;
  refreshPrint: () => void;
};

export type TimeType = {
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
  count: CountType;
  textRef: React.RefObject<HTMLDivElement>;
  animateFlame: string;
  animateTime: string;
};

export type SpeedIntervalType = {
  [key: string]: number;
  easy: number;
  normal: number;
  hard: number;
};

export type QuoteBlockType = {
  setQuote: React.Dispatch<React.SetStateAction<QuoteType>>;
  focus: boolean;
} & TimeType &
  QuoteType;

export type ModalType = {
  children: React.ReactNode;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: "default" | "private";
};

export type SettingsViewType = {
  onClickPlus: () => void;
  onClickMinus: () => void;
  onSelectSpeed: (speed: string) => void;
} & TimeType;

export type SettingsType = {
  setTimeSpeed: React.Dispatch<React.SetStateAction<string>>;
  setTimePrint: React.Dispatch<
    React.SetStateAction<{
      max: number;
      default: number;
      min: number;
    }>
  >;
} & TimeType;

export type HomeViewType = {
  quote: QuoteType;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleModal: () => void;
  setQuote: React.Dispatch<React.SetStateAction<QuoteType>>;
  focus: boolean;
} & SettingsType &
  TimeType;
