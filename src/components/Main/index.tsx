import style from "./Main.module.css";

import { Ingalator } from "../Ingalator";
import { Links } from "../Links";
import blueLineImg from "../../common/assets/blue-line.svg";

export const Main = () => {
  return (
    <div className={style.root}>
      <div className={style.headerWrapper}>
        <div className={style.blueLineWrapper}>
          <img src={blueLineImg} alt="" />
        </div>
        <div className={style.header}>ХОБЛ: мифы и реальность</div>
      </div>
      <Links />
      <div className={style.headerWrapper}>
        <div className={style.blueLineWrapper}>
          <img src={blueLineImg} alt="" />
        </div>
        <div className={style.header}>Терапия ХОБЛ: что в фокусе?</div>
      </div>
      <Ingalator />
    </div>
  );
};
