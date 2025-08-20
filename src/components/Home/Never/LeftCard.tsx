"use client";

import Image from "next/image";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import styles from "./Never.module.css";

type LeftCardProps = {
  card: {
    title: string;
    subtitle: string;
    btn?: boolean;
    image: any;
  };
  fade: boolean;
};

export default function LeftCard({ card, fade }: LeftCardProps) {
  return (
    <>
      <div
        className={`${styles.neverCardLeftContent} ${
          fade ? styles.fadeInLeft : styles.fadeOutLeft
        }`}
      >
        <div className={styles.neverCardLeftTexts}>
          <div className={styles.neverCardLeftTitle}>{card.title}</div>
          <div className={styles.neverCardLeftSubtitle}>{card.subtitle}</div>
        </div>
        {card.btn && <BlueButton text="Learn More About the PLP" />}
      </div>

      <div
        className={`${styles.neverCardLeftImg} ${
          fade ? styles.fadeInLeft : styles.fadeOutLeft
        }`}
      >
        <Image src={card.image} alt="" />
      </div>
    </>
  );
}
