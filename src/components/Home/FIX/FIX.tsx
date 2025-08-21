"use client";

import Image from "next/image";
import styles from "./FIX.module.css";
import circle from "../../../assets/img/fixCircle.png";
import circleMob from "../../../assets/img/fixCircleMob.png";
import Socials from "@/src/ui/Socials/Socials";
import { useEffect, useState } from "react";
import FixMobIcon from "@/src/assets/svg/FIXMobIcon";
import circleMobBg from "../../../assets/img/fixCircleBgMob.png";

const FixCards = [
  {
    title: "Presale",
    percents: "50%",
    fill: "#057AC2",
  },
  {
    title: "Marketing & GrowthP",
    percents: "10%",
    fill: "#8B98A1",
  },
  {
    title: "Team",
    subtitle: "vested over 3 years",
    percents: "5%",
    fill: "#65E1F7",
  },
  {
    title: "Development",
    subtitle: "vested",
    percents: "5%",
    fill: "#1252B4",
  },
  {
    title: "PLP",
    percents: "15%",
    fill: "#6B8CBD",
  },
  {
    title: "Liquidity",
    percents: "15%",
    fill: "#8E44AD",
  },
];

export default function FIX() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.fix}>
      <div className={styles.fixTexts}>
        <div className={`${styles.fixTitle} title`}>
          $FIX Token: Driving the Ffx{" "}
        </div>
        <div className={styles.fixSubtitle}>
          The <span>$FIX token</span> is more than a utility—it’s what{" "}
          <span>connects traders</span> to our platform’s core benefits,
          including access to <span>premium features</span> and revenue-sharing{" "}
          <span>options</span>.
        </div>
      </div>

      <div className={styles.fixCards}>
        <div className={styles.fixCircle}>
          <Image src={isMobile ? circleMob : circle} alt="" />
        </div>

        <div className={styles.fixCircleBg}>
          <Image src={circleMobBg} alt="" />
        </div>

        {FixCards.map((card, index) => (
          <div
            key={index}
            className={`${styles.fixCard} ${styles[`fixCard${index + 1}`]}`}
          >
            <div className={styles.fixCardText}>
              <div
                className={`${styles.fixCardTitle} ${
                  styles[`fixCardTitle${index + 1}`]
                }`}
              >
                {card.title}
              </div>
              {card.subtitle && (
                <div className={styles.fixCardSubtitle}>{card.subtitle}</div>
              )}
            </div>
            <Socials
              wrapperClass={styles.fixSoc}
              stroke="rgba(255, 255, 255, 0.29)"
              links={[
                isMobile
                  ? {
                      name: "FixCardNum",
                      component: <FixMobIcon fill={card.fill} />,
                    }
                  : {
                      name: "FixCardNum",
                      text: card.percents,
                    },
              ]}
            />
          </div>
        ))}
      </div>

      <div className={styles.fixCardsMob}>
        {FixCards.map((card, index) => (
          <div key={index} className={styles.fixCardMob}>
            <Socials
              wrapperClass={styles.fixSoc}
              stroke="rgba(255, 255, 255, 0.29)"
              links={[
                {
                  name: "FixCardNum",
                  component: <FixMobIcon fill={card.fill} />,
                },
              ]}
            />
            <div className={styles.fixCardTextMob}>
              <div
                className={`${styles.fixCardTitle} ${
                  styles[`fixCardTitle${index + 1}`]
                }`}
              >
                {card.title}
              </div>
              {card.subtitle && (
                <div className={styles.fixCardSubtitle}>{card.subtitle}</div>
              )}
            </div>
            <Socials
              wrapperClass={`${styles.fixSoc} ${styles.fixMobNum}`}
              stroke="rgba(255, 255, 255, 0.29)"
              links={[
                {
                  name: "FixCardNum",
                  text: card.percents,
                },
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
