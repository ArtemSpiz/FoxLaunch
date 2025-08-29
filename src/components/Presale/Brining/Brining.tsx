import Image from "next/image";
import styles from "./Brining.module.css";
import briningImg from "../../../assets/img/briningImg.png";
import briningImgBg from "../../../assets/img/briningImgBg.png";
import briningImgMob from "../../../assets/img/briningImgMob.png";
import { BriningCards } from "@/src/constants/BriningCards";

export default function Brining() {
  return (
    <div className={styles.brining}>
      <div className={styles.briningTexts}>
        <div className={`${styles.title} title`}>
          Warn by brining treads to Ffx
        </div>
        <div className={styles.subtitle}>
          Join our affiliate program and earn commissions for each new trader
          who participates in the presale. Share your unique link and watch your
          rewards grow. Our multi-level program offers generous commissions and
          multiple ways to earn
        </div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.cardsImg}>
          <Image src={briningImg} alt="image" />
        </div>
        {/* <div className={styles.cardsImgBg}>
          <Image src={briningImgBg} alt="image" />
        </div> */}

        <div className={styles.cardsImgMob}>
          <Image src={briningImgMob} alt="image" />
        </div>

        <div className={styles.cards}>
          {BriningCards.map((card, index) => (
            <div key={index} className={styles.card}>
              {card.title}
              {card.subtitle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
