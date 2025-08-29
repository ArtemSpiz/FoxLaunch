"use client";

import BlueButton from "@/src/ui/BlueButton/BlueButton";
import styles from "./FIXPresale.module.css";
import Image from "next/image";
import fixPresaleImg from "../../../assets/img/fixPresaleImg.png";
import fixPresaleImgMob from "../../../assets/img/fixPresaleImgMob.png";
import fixPresaleGlow from "../../../assets/img/fixPresaleGlow.png";
import fixPresaleGlowMob from "../../../assets/img/fixPresaleGlowMob.png";
import Socials from "@/src/ui/Socials/Socials";
import { useEffect, useState } from "react";
import { fixPresaleCards } from "@/src/constants/FixPresaleCards";


export default function FIXPresale() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className={styles.fixPresale}>
      <div className={styles.fixPresaleText}>
        <div className={`${styles.fixPresaleTitle} title`}>
          Buy $FIX Token: in 3 easy steps
        </div>
        <BlueButton className={styles.fixBtn} text="Start Your Purchase" />
      </div>

      <div className={styles.glow}>
        <Image
          src={isMobile ? fixPresaleGlowMob : fixPresaleGlow}
          alt="image"
        />
      </div>

      <div className={styles.fixPresaleCards}>
        <div className={styles.cardsImage}>
          <Image
            src={isMobile ? fixPresaleImgMob : fixPresaleImg}
            alt="image"
          />
        </div>

        {fixPresaleCards.map((card, index) => (
          <div
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
            key={index}
          >
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardSubtitle}>{card.subtitle}</div>

            <Socials
              wrapperClass={styles.cardNum}
              stroke="rgba(255, 255, 255, 0.29)"
              links={[
                {
                  name: "cardNumber",
                  text: card.number,
                },
              ]}
            />
          </div>
        ))}
      </div>

      <div className={styles.cardsWrapperMob}>
        {fixPresaleCards.map((card, index) => (
          <div className={styles.cardMobile} key={index}>
            <div className={styles.cardTop}>
              <Socials
                wrapperClass={styles.cardNum}
                stroke="rgba(255, 255, 255, 0.29)"
                links={[
                  {
                    name: "cardNumber",
                    text: card.number,
                  },
                ]}
                enableHover={false}
              />
              <div className={`${styles.cardTitle} ${styles.cardTitleMob} `}>
                {card.title}
              </div>
            </div>
            <div
              className={`${styles.cardSubtitle} ${styles.cardSubtitleMob} `}
            >
              {card.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
