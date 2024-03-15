import style from "./Diagram.module.css";
import DiagaramImg from "../../../common/assets/diagrama.svg";

export const Diagram = () => {
  return (
    <div className={style.root}>
      <div>
        В десятилетнем исследовании{" "}
        <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b>
        среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
        <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет количество
        женщин и мужчин.
      </div>
      <div className={style.description}>
        Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть
        связано с тем, что дыхательные пути курящих женщин имеют более{" "}
        <b>высокий процент площади стенок</b>, но меньшую площадь просвета,
        внутренний диаметр и толщину дыхательных путей по сравнению с курящими
        мужчинами.
      </div>
      <div className={style.diagram}>
        <img src={DiagaramImg} alt="diagram" />
      </div>
    </div>
  );
};
