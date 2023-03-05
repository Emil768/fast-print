import { SettingsType } from "../../@types";
import { SettingsView } from "./SettingsView";
import styles from "./styles.module.scss";

export const Settings = ({
  timePrint,
  timeSpeed,
  setTimePrint,
  setTimeSpeed,
}: SettingsType) => {
  const onClickPlus = () => {
    if (timePrint.default < timePrint.max) {
      setTimePrint((prev) => ({
        ...prev,
        default: (prev.default += 20),
      }));
    }
  };

  const onClickMinus = () => {
    if (timePrint.default > timePrint.min) {
      setTimePrint((prev) => ({
        ...prev,
        default: (prev.default -= 20),
      }));
    }
  };

  const onSelectSpeed = (speed: string) => {
    setTimeSpeed(speed);
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
