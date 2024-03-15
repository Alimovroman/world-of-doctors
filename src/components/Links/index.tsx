import style from "./Links.module.css";
import manImg from "../../common/assets/man.svg";
import dangerImg from "../../common/assets/danger.svg";
import blueClickImg from "../../common/assets/click_blue.svg";
import greenClickImg from "../../common/assets/click_green.svg";
import { useState } from "react";
import { Diagram } from "./Diagram/Diagram";
import { Diseases } from "./Diseases/Diseases";

export const Links = () => {
  const [isShowDiagram, setIsShowDiagram] = useState(false);
  const [isShowDiseases, setIsShowDiseases] = useState(false);

  const onShowDiagram = () => {
    setIsShowDiagram(!isShowDiagram);
  };

  const onShowDiseases = () => {
    setIsShowDiseases(!isShowDiseases);
  };

  return (
    <div className={style.root}>
      <div>
        <div className={style.link} onClick={onShowDiagram}>
          {!isShowDiagram && (
            <>
              <div className={style.icon}>
                <img src={manImg} alt="man" />
              </div>
              <div className={style.linkHeader}>
                ХОБЛ болеют <b>преимущественно мужчины?</b>
              </div>
              <div className={style.description}>
                В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
                (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет,
                было выявлено преобладание...
              </div>
              <div className={style.click}>
                <img src={blueClickImg} alt="click" />
              </div>
            </>
          )}
          {isShowDiagram && <Diagram />}
        </div>

        <div className={style.link} onClick={onShowDiseases}>
          {!isShowDiseases && (
            <>
              <div className={style.icon}>
                <img src={dangerImg} alt="danger" />
              </div>
              <div className={style.linkHeader}>
                <b>Опасно</b> не наличие заболевания, а обострения?
              </div>
              <div className={style.description}>
                Большинство пациентов с ХОБЛ столкнется с обострениями: как
                минимум одно среднетяжелое или тяжелое обострение случится в
                течение...
              </div>
              <div className={style.click}>
                <img src={greenClickImg} alt="click" />
              </div>
            </>
          )}
          {isShowDiseases && <Diseases />}
        </div>
      </div>
    </div>
  );
};
