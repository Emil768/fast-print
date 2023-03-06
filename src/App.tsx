import React from "react";
import styles from "./App.module.scss";
import { Home } from "./components/Home";

function App() {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
