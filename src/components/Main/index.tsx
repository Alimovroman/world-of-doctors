import style from "./Main.module.css";

import { Ingalator } from "../Ingalator";
import { Links } from "../Links";

export const Main = () => {
  return (
    <div>
      <div className={style.header}>ХОБЛ: мифы и реальность</div>
      <Links />
      <div className={style.header}>Терапия ХОБЛ: что в фокусе?</div>
      <Ingalator />
    </div>
  );
};
