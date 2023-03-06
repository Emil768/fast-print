import { QuoteViewType } from "../../../@types";
import styles from "./styles.module.scss";

export const QuoteView = ({
  textQuote,
  activeQuote,
  activeLetter,
  author,
  onChangeText,
  counter,
  count,
  textRef,
  animateFlame,
  animateTime,
}: QuoteViewType) => (
  <div className={styles.quote}>
    <h1 className={styles.quote__title}>Quotes-app 💬</h1>
    <div className={styles.quote__content}>
      {textQuote.map((item, index) => {
        return (
          <div className={styles.quote__word} key={index}>
            {activeQuote === index
              ? item.split("").map((item, index) => {
                  return (
                    <span
                      className={
                        activeLetter === index
                          ? [
                              styles.quote__letter,
                              styles["quote__letter-active"],
                            ].join(" ")
                          : styles.quote__letter
                      }
                      key={index}
                    >
                      {item}
                    </span>
                  );
                })
              : item.split("").map((item, index) => {
                  return (
                    <span className={styles.quote__letter} key={index}>
                      {item}
                    </span>
                  );
                })}
          </div>
        );
      })}
    </div>
    <div className={styles.quote__author}>
      <i>～{author}</i>
    </div>
    <div className={styles.quote__info}>
      <div
        className={styles.quote__text}
        contentEditable={true}
        onInput={onChangeText}
        suppressContentEditableWarning={true}
        spellCheck={false}
        ref={textRef}
      ></div>
      <div className={styles.quote__info}>
        <div className={styles["quote__info-streak"]}>
          streak: {count.max}
          <span className={styles.quote__fire}>
            <span
              className={[
                styles.quote__flame,
                styles["quote__flame-base"],
              ].join(" ")}
            >
              🔥
            </span>
            <span
              className={[styles.quote__flame, styles[animateFlame]].join(" ")}
            >
              🔥
            </span>
            <span
              className={[styles.quote__flame, styles[animateFlame]].join(" ")}
            >
              🔥
            </span>
            <span
              className={[styles.quote__flame, styles[animateFlame]].join(" ")}
            >
              🔥
            </span>
          </span>
        </div>
        <div className={styles["quote__info-time"]}>
          time: {counter}{" "}
          <span className={[styles.quote__time, styles[animateTime]].join(" ")}>
            ⏱️
          </span>
        </div>
      </div>
    </div>
  </div>
);
