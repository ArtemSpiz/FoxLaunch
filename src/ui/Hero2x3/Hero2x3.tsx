import Image, { StaticImageData } from "next/image";
import styles from "./Hero2x3.module.css";
import Socials from "../Socials/Socials";

type Card = {
  icon?: string | StaticImageData;
  image?: string | StaticImageData;
  title?: string;
  subtitle?: string;
};

type Hero2x3Props = {
  bgImage: string | StaticImageData;
  hero?: {
    title?: string;
    subtitle?: string;
    text?: string;
  };
  content?: {
    title?: string;
    subtitle?: string;
    text?: string;
  };
  layout?: {
    heroTextClass?: "p32" | "p56";
    textClass?: "p32" | "p56";
    heroTextJC?: "jcC" | "jcE" | "jcS";
    textJC?: "jcC" | "jcE" | "jcS";
    typeOfWrapper?: "" | "cardsWrapper2";
    textWrapper?: "textWrapper" | "textWrapper2";
    texts?: "texts" | "texts2";
  };
  cards?: {
    enabled?: boolean;
    type?: "1" | "2";
    imageClass?:
      | "imageType1"
      | "imageType2"
      | "imageType3"
      | "imageType4"
      | "imageType5";
    cardClass?: string;
    data?: Card[];
  };
  imgPropClass?: string;
};

export default function Hero2x3({
  bgImage,
  hero = {},
  content = {},
  layout = {},
  cards = {},
  imgPropClass = "",
}: Hero2x3Props) {
  const {
    heroTextClass = "p32",
    textClass = "p32",
    heroTextJC = "jcC",
    textJC = "jcC",
    typeOfWrapper = "",
    textWrapper = "textWrapper",
    texts = "texts",
  } = layout;

  const {
    enabled: cardsEnable = false,
    type: cardsType = "1",
    imageClass = "imageType1",
    cardClass = "",
    data: cardsData = [],
  } = cards;

  return (
    <div className={`${styles.hero2x3} heroContainer`}>
      <div
        className={`${styles.grid} heroContainerMob`}
        style={{
          backgroundImage: `url(${
            typeof bgImage === "string" ? bgImage : bgImage.src
          })`,
        }}
      >
        <div className={`${styles.cardsWrapper} ${styles[typeOfWrapper]}`}>
          {hero.title && (
            <div className={`${styles.p48} ${styles.titleContainer}`}>
              <div className={styles.heroTitle}>{hero.title}</div>
            </div>
          )}
          {hero.subtitle && (
            <div className={`${styles.p48} ${styles.subtitleContainer}`}>
              <div className={styles.heroSubtitle}>{hero.subtitle}</div>
            </div>
          )}
          {hero.text && (
            <div className={`${styles.p48} ${styles.textContainer}`}>
              <div className={styles.heroText}>{hero.text}</div>
            </div>
          )}
          {hero.title && <div className={styles.blur}></div>}

          {/* Content Section */}
          {content.title && (
            <div
              className={`${styles[heroTextClass]} ${styles[heroTextJC]} ${styles[texts]}`}
            >
              <div className={`${styles.title} title`}>{content.title}</div>
              {content.subtitle && (
                <div className={styles.subtitle}>{content.subtitle}</div>
              )}
            </div>
          )}
          {content.text && (
            <div
              className={`${styles[textClass]} ${styles[textJC]} ${styles[textWrapper]}`}
            >
              <div className={styles.text}>{content.text}</div>
            </div>
          )}

          {/* Cards Section */}
          {cardsEnable &&
            cardsData.map((card, index) => (
              <HeroCard
                key={index}
                card={card}
                index={index}
                cardsType={cardsType}
                cardClass={cardClass}
                imageClass={imageClass}
                imgPropClass={imgPropClass}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

type HeroCardProps = {
  card: Card;
  index: number;
  cardsType: string;
  cardClass: string;
  imageClass: string;
  imgPropClass: string;
};

function HeroCard({
  card,
  index,
  cardsType,
  cardClass,
  imageClass,
  imgPropClass,
}: HeroCardProps) {
  return (
    <div
      className={`${styles.card} ${
        styles[`cards${cardsType}_${index + 1}`]
      } ${cardClass}`}
    >
      <Socials
        enableHover={false}
        wrapperClass={styles.icon}
        stroke="#A5C6E2"
        links={[{ name: "", icon: card.icon }]}
      />

      {card.image && (
        <div
          className={`${styles[`${imageClass}_${index + 1}`]} ${imgPropClass}`}
        >
          <Image src={card.image} alt="" />
        </div>
      )}

      <div className={styles.cardTexts}>
        <div className={styles.cardTitle}>{card.title}</div>
        <div className={styles.cardSubtitle}>{card.subtitle}</div>
      </div>
    </div>
  );
}
