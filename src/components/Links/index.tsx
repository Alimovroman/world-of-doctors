import style from "./Links.module.css";
import manImg from "../../common/assets/man.svg";
import dangerImg from "../../common/assets/danger.svg";
import blueClickImg from "../../common/assets/click_blue.svg";
import greenClickImg from "../../common/assets/click_green.svg";

export const Links = () => {
  return (
    <div>
      <div>
        <div className={style.link}>
          <div>
            <img src={manImg} alt="man" />
          </div>
          <div className={style.linkHeader}>
            ХОБЛ болеют преимущественно мужчины?
          </div>
          <div className={style.description}>
            В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
            (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было
            выявлено преобладание...
          </div>
          <div>
            <img src={blueClickImg} alt="click" />
          </div>
        </div>
        <div className={style.link}>
          <div>
            <img src={dangerImg} alt="danger" />
          </div>
          <div className={style.linkHeader}>
            Опасно не наличие заболевания, а обострения?
          </div>
          <div className={style.description}>
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение...
          </div>
          <div>
            <img src={greenClickImg} alt="click" />
          </div>
        </div>
      </div>
    </div>
  );
};
