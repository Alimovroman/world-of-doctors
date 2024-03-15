import style from "./Ingalator.module.css";
import ing1Img from "../../common/assets/ingalator1.svg";
import ing2Img from "../../common/assets/ingalator2.svg";
import ing3Img from "../../common/assets/ingalator3.svg";
import blockImg from "../../common/assets/block.svg";

export const Ingalator = () => {
  return (
    <div className={style.root}>
      <div className={style.attentionText}>
        Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
      </div>
      <div className={style.tableHeader}>
        Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:
      </div>
      <div className={style.table}>
        <div className={style.ingalatorItem}>
          <div>
            <img src={ing1Img} alt="ingolator" />
          </div>
          <div className={style.ingalatorHeader}>
            Ингаляционный <b>антихолинергик</b>
          </div>
          <div className={style.ingalatorDescription}>
            Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним
            в конкурентный антагонизм за взаимодействие с эффекторными
            мускариновыми рецепторами, дополняет и потенцирует эффект
            β2-агонистов1
          </div>
        </div>
        <div className={style.ingalatorItem}>
          <div>
            <img src={ing2Img} alt="ingolator" />
          </div>
          <div className={style.ingalatorHeader}>
            Ингаляционный <br />
            <b>β2-агонист</b>
          </div>
          <div className={style.ingalatorDescription}>
            Вызывает бронходилатацию посредством релаксации гладкомышечных
            клеток бронхов независимо от характера констриктивных стимулов, т.
            е. выступают в качестве функциональных антагонистов
            бронхоконстрикции
          </div>
        </div>
        <div className={style.ingalatorItem}>
          <div>
            <img src={ing3Img} alt="ingolator" />
          </div>
          <div className={style.ingalatorHeader}>
            Ингаляционный <b>глюкокортикостероид</b> <br />
            (ИГКС)
          </div>
          <div className={style.ingalatorDescription}>
            Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют
            хроническое воспаление при астме и снижают гиперреактивность
            дыхательных путей
          </div>
        </div>
      </div>
      <div className={style.blockImgWrapper}>
        <div className={style.blockImgItem}>
          <img src={blockImg} alt="block" />
        </div>
        <div className={style.blockImgItem}>
          <img src={blockImg} alt="block" />
        </div>
      </div>
      <div className={style.recomendationBlock}>
        <div className={style.recomendationItem}>
          Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с
          разными механизмами действия; Назначение 2-х бронходилататоров из
          группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих
          антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг
          друга1.
        </div>
        <div className={style.recomendationItem}>
          Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в
          течение 1 года/1 тяжелое обострение, потребовавшее госпитализации)
          рекомендуется назначение ИГКС в дополнение к ДДБА; Последние
          исследования показали, что амбулаторное применение ИГКС/ДДБА у
          пациентов с ХОБЛ снижает госпитальную летальность по сравнению с
          пациентами, принимавшими только ДДБА (8,1% vs 13,2%)1.
        </div>
      </div>
    </div>
  );
};
