import Image from "next/image";
import styles from "./Cards.module.css";
import ImageCards from "@/src/assets/img/ManageImg.png";
import { leftCards, rightCards } from "@/src/constants/Cards";

export default function Cards() {
  return (
    <div className={`${styles.pricingCards} container`}>
      <div className={styles.cards}>
        {leftCards.map((card, i) => (
          <div className={`${styles.card} ${styles.leftCard}`} key={i}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardSubtitle}>{card.subtitle}</div>
          </div>
        ))}
      </div>
      <div className={styles.image}>
        <Image src={ImageCards} alt="image" />
      </div>
      <div className={styles.cards}>
        {rightCards.map((card, i) => (
          <div className={`${styles.card} ${styles.rightCard}`} key={i}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardSubtitle}>{card.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
