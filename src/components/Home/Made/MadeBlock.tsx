import styles from "./Made.module.css";
import ArrowCard from "../../../assets/svg/ArrowCard.svg";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import Socials from "@/src/ui/Socials/Socials";
import border from "../../../assets/img/borderBlue.png";
import Image, { StaticImageData } from "next/image";

type MadeBlockProps = {
  card: {
    type: string;
    icon?: string | StaticImageData;
    image?: string | StaticImageData;
    imageClass?: string;
    title: string;
    subtitle?: string;
  };
  isFirstImage?: boolean;
};

export default function MadeBlock({
  card,
  isFirstImage = false,
}: MadeBlockProps) {
  switch (card.type) {
    case "text":
      return (
        <div className={`${styles.madeCard} ${styles.madeCardText}`}>
          <div className={`${styles.cardTextTitle} title`}>{card.title}</div>
          <BlueButton />
        </div>
      );

    case "card":
      return (
        <div className={styles.madeCard}>
          <div className={styles.madeCardTop}>
            <Socials
              wrapperClass={styles.madeIcon}
              stroke="#A5C6E2"
              links={[
                {
                  name: "MadeCardIcon",
                  icon: card.icon!,
                },
              ]}
            />

            <div className={styles.madeArrow}>
              <Image src={ArrowCard} alt="" />
            </div>
          </div>

          {card.image && (
            <div
              className={`${styles.cardImage} ${
                isFirstImage ? styles.madeImg1 : ""
              }`}
            >
              <Image src={card.image} alt=" " />
            </div>
          )}

          <div className={styles.cardTexts}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardSubtitle}>{card.subtitle}</div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
