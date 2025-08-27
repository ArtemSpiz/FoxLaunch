"use client";

import Image from "next/image";
import styles from "./Never.module.css";
import ArrowNever from "../../../assets/svg/ArrowNever.svg";

type RightCardProps = {
  card: { icon: any; title: string; subtitle: string };
  index: number;
  openIndex: number | null;
  toggleOpen: (index: number) => void;
};

export default function RightCard({
  card,
  index,
  openIndex,
  toggleOpen,
}: RightCardProps) {
  return (
    <div
      className={styles.neverCardRightContent}
      onClick={() => toggleOpen(index)}
    >
      <div className={styles.neverCardRContTop}>
        <div className={styles.neverCardRContTitle}>
          <div className={styles.neverCardRContIcon}>
            <Image width={40} height={40} src={card.icon} alt="image" />
          </div>
          {card.title}
        </div>
        <div
          className={`${styles.neverCardRArrow} ${
            openIndex === index ? styles.arrowOpen : ""
          }`}
        >
          <Image src={ArrowNever} alt="image" />
        </div>
      </div>

      <div
        className={`${styles.neverCardRContSubtitle} ${
          openIndex === index ? styles.subtitleOpen : ""
        }`}
      >
        {card.subtitle}
      </div>
    </div>
  );
}
