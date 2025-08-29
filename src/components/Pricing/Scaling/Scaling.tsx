import styles from "./Scaling.module.css";
import Image from "next/image";
import Socials from "@/src/ui/Socials/Socials";
import Glow from "@/src/assets/img/ScalingGlow.png";
import Glow2 from "@/src/assets/img/ScalingGlow2.png";
import { ScalingCards } from "@/src/constants/ScalingCards";


export default function Scaling() {
  return (
    <div className={`${styles.scaling} container`}>
      <div className={styles.grid}>
        {ScalingCards.map((card, index) => (
          <div key={index} className={styles.cardWrapper}>
            {card.title && (
              <div className={styles.cardTexts}>
                <div className={`${styles.title} title`}>{card.title}</div>
                <div className={styles.subtitle}>{card.subtitle}</div>
              </div>
            )}

            {card.text && (
              <div className={styles.card}>
                <Socials
                  stroke="#A5C6E2"
                  wrapperClass={styles.cardIcon}
                  links={[{ icon: card.icon, name: "cardLink" }]}
                />
                <div
                  className={`${styles.image} ${styles[`image${index + 1}`]}`}
                >
                  <Image src={card.image} alt="image" />
                </div>
                <div className={`${styles.text} ${styles[`text${index + 1}`]}`}>
                  {card.text}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className={styles.glow}>
          {" "}
          <Image src={Glow} alt="image" />
        </div>
        <div className={styles.glow2}>
          {" "}
          <Image src={Glow2} alt="image" />
        </div>
      </div>
    </div>
  );
}
