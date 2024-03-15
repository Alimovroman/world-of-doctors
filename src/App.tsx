import React from "react";
import style from "./App.module.css";
import { Main } from "./components/Main";
import blueLineImg from "./common/assets/blue-line.svg";
import yellowGreenLineImg from "./common/assets/yellow-green-line.svg";
import yellowLineImg from "./common/assets/yellow_line.svg";

function App() {
  return (
    <div className={style.root}>
      <div className={style.linesWrapper}>
        <div className={style.blueLine}>
          <img src={blueLineImg} alt="" />
        </div>
        <div className={style.yellowGreenLine}>
          <img src={yellowGreenLineImg} alt="" />
        </div>
        <div className={style.yellowLine}>
          <img src={yellowLineImg} alt="" />
        </div>
      </div>
      <Main />
    </div>
  );
}

export default App;
