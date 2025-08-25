import styles from "./Scaling.module.css";
import ScalingIcon1 from "../../../assets/svg/ScalingIcon1.svg";
import ScalingIcon2 from "../../../assets/svg/ScalingIcon2.svg";
import ScalingIcon3 from "../../../assets/svg/ScalingIcon3.svg";
import ScalingIcon4 from "../../../assets/svg/ScalingIcon4.svg";

import ScalingImg1 from "../../../assets/img/ScalingImg1.png";
import ScalingImg2 from "../../../assets/img/ScalingImg2.png";
import ScalingImg3 from "../../../assets/img/ScalingImg3.png";
import ScalingImg4 from "../../../assets/img/ScalingImg4.png";
import Image from "next/image";
import Socials from "@/src/ui/Socials/Socials";
import Glow from "@/src/assets/img/ScalingGlow.png";
import Glow2 from "@/src/assets/img/ScalingGlow2.png";

const ScalingCards = [
  {
    title: "Scaling and Payout Plans for Funded Accounts",
    subtitle:
      "Once traders complete the challenge and become funded, they can request a payout every 14 days, subject to the following condition",
  },
  {
    icon: ScalingIcon1,
    image: ScalingImg1,
    text: "No more than 30% of profit can come from a single day's trading",
  },
  {
    icon: ScalingIcon2,
    image: ScalingImg2,
    text: "Trading rules must not have been violated",
  },
  {
    icon: ScalingIcon3,
    image: ScalingImg3,
    text: "The payout amount must be at least $100",
  },
  {
    icon: ScalingIcon4,
    image: ScalingImg4,
    text: "A trader must have no open trades at the time of the payout request.",
  },
];

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
                  <Image src={card.image} alt="" />
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
          <Image src={Glow} alt="" />
        </div>
        <div className={styles.glow2}>
          {" "}
          <Image src={Glow2} alt="" />
        </div>
      </div>
    </div>
  );
}
