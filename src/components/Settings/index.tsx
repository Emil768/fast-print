import { SettingsType } from "../../@types";
import { SettingsView } from "./SettingsView";
import boopSound from "../../sounds/boop.mp3";
import useSound from "use-sound";

export const Settings = ({
  timePrint,
  timeSpeed,
  setTimePrint,
  setTimeSpeed,
}: SettingsType) => {
  const [play] = useSound(boopSound);
  const onClickPlus = () => {
    if (timePrint.default < timePrint.max) {
      setTimePrint((prev) => ({
        ...prev,
        default: (prev.default += 20),
      }));
    }
    play();
  };

  const onClickMinus = () => {
    if (timePrint.default > timePrint.min) {
      setTimePrint((prev) => ({
        ...prev,
        default: (prev.default -= 20),
      }));
    }
    play();
  };

  const onSelectSpeed = (speed: string) => {
    setTimeSpeed(speed);
    play();
  };

  return (
    <SettingsView
      onClickMinus={onClickMinus}
      onClickPlus={onClickPlus}
      onSelectSpeed={onSelectSpeed}
      timePrint={timePrint}
      timeSpeed={timeSpeed}
    />
  );
};
