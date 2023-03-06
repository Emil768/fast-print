import React from "react";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";

function App() {
  return (
    <div className={styles.app}>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
