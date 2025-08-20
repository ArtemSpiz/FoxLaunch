import styles from "./Made.module.css";
import madeIcon1 from "../../../assets/svg/madeIcon1.svg";
import madeIcon2 from "../../../assets/svg/madeIcon2.svg";
import madeIcon3 from "../../../assets/svg/madeIcon3.svg";
import madeIcon4 from "../../../assets/svg/madeIcon4.svg";
import madeIcon5 from "../../../assets/svg/madeIcon5.svg";
import madeIcon6 from "../../../assets/svg/madeIcon6.svg";
import madeIcon7 from "../../../assets/svg/madeIcon7.svg";
import madeImg1 from "../../../assets/img/madeImg1.png";
import madeImg2 from "../../../assets/img/madeImg2.png";
import madeImg3 from "../../../assets/img/madeImg3.png";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import Image from "next/image";
import Socials from "@/src/ui/Socials/Socials";
import border from "../../../assets/img/borderBlue.png";
import ArrowCard from "../../../assets/svg/ArrowCard.svg";
import madeGlow from "../../../assets/svg/MadeGlow.svg";

const MadeContent = [
  {
    type: "text",
    title: "Made by traders for trades",
  },
  {
    type: "card",
    icon: madeIcon1,
    image: madeImg1,
    imageClass: styles.madeImg1,
    title: "Crypto Prop Trading",
    subtitle: "Win funded accounts via challenges",
  },
  {
    type: "card",
    icon: madeIcon2,
    title: "OnChain",
    subtitle: "Trade microcaps with funding & payouts",
  },
  {
    type: "card",
    icon: madeIcon3,
    title: "FundFix Prime",
    subtitle: "Trade traditional markets with high-volume accounts",
  },
  {
    type: "card",
    icon: madeIcon4,
    image: madeImg2,
    title: "Academy",
    subtitle: "Boost trading strategies with practical courses",
  },
  {
    type: "card",
    icon: madeIcon5,
    title: "Dashboard",
    subtitle: "Improve trading with practical courses",
  },
  {
    type: "card",
    icon: madeIcon6,
    title: "AI Signals",
    subtitle: "Use AI insights or top traders to boost profits",
  },
  {
    type: "card",
    icon: madeIcon7,
    image: madeImg3,
    title: "Crypto Card Integration",
    subtitle: "Transform your crypto into cash—anytime, anywhere",
  },
];

export default function Made() {
  return (
    <div className={`${styles.made} container`}>
      {MadeContent.map((card, index) => (
        <div key={index} className={styles.madeCardWrapper}>
          {card.type === "text" && (
            <div className={`${styles.madeCard} ${styles.madeCardText}`}>
              <div className={styles.cardTextTitle}>{card.title}</div>
              <BlueButton />
            </div>
          )}

          {card.type === "card" && (
            <div className={styles.madeCard}>
              <div className={styles.madeCardTop}>
                <Socials
                  wrapperClass={styles.madeIcon}
                  links={[
                    {
                      name: "MadeCardIcon",
                      icon: card.icon,
                      borderTop: border,
                      borderBottom: border,
                    },
                  ]}
                />

                <div className={styles.madeArrow}>
                  <Image src={ArrowCard} alt="" />
                </div>
              </div>

              {card.image && (
                <div className={`${styles.cardImage} ${card.imageClass || ""}`}>
                  <Image src={card.image} alt=" " />
                </div>
              )}

              <div className={styles.cardTexts}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardSubtitle}>{card.subtitle}</div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className={styles.madeGlow}>
        <Image src={madeGlow} alt="" />
      </div>

      <div className={styles.madeGlowMob}>
        <Image src={madeGlow} alt="" />
      </div>
    </div>
  );
}
