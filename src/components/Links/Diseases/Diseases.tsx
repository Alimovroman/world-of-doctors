import style from "./Diseases.module.css";
import heartImg from "../../../common/assets/heart.svg";
import micardImg from "../../../common/assets/micard.svg";
import cancerImg from "../../../common/assets/cancer.svg";

export const Diseases = () => {
  return (
    <div className={style.root}>
      <div>
        <b>
          Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
          одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
          77% пациентов1.
        </b>
      </div>
      <div className={style.description}>
        В течение 5 лет после первого тяжёлого обострения в живых остаются
        только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым при
        сердечной недостаточности, инфаркте миокарда и некоторых злокачественных
        опухолях.
      </div>
      <div className={style.header}>Пятилетняя выживаемость пациентов</div>
      <div className={style.images}>
        <div>
          <img src={heartImg} alt="heart" />
        </div>
        <div>
          <img src={micardImg} alt="micard" />
        </div>
        <div>
          <img src={cancerImg} alt="cancer" />
        </div>
      </div>
    </div>
  );
};
