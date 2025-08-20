import Image from "next/image";
import styles from "./Hero.module.css";
import lineHero from "../../../assets/img/lineHero.png";
import Socials from "@/src/ui/Socials/Socials";

type HeroBlockProps = {
  block: {
    type: string;
    title: string;
    items?: { label: string }[];
    raised?: string;
    goal?: string;
  };
};

export default function HeroBlock({ block }: HeroBlockProps) {
  switch (block.type) {
    case "text":
      return (
        <div className={`${styles.heroTextBlock} ${styles.heroCard}`}>
          <h2 className={styles.heroTitle}>{block.title}</h2>
        </div>
      );

    case "distribution":
      return (
        <div className={`${styles.heroCard} ${styles.heroCardDist}`}>
          <h4 className={styles.heroDistTitle}>{block.title}</h4>
          <div className={styles.heroDistSubWrapper}>
            {block.items?.map((item, i) => (
              <p className={styles.heroDistSubtitle} key={i}>
                {item.label}
              </p>
            ))}
          </div>
        </div>
      );

    case "progress":
      return (
        <div className={`${styles.heroCard} ${styles.heroCardProgress}`}>
          <h4 className={styles.heroCardTitle}>{block.title}</h4>
          <div className={styles.heroCardBot}>
            <div className={styles.progressBar}>
              <Image src={lineHero} alt="progress" />
            </div>
            <p className={styles.progressCardRaised}>
              USD Raised{" "}
              <span>
                {block.raised} / {block.goal}
              </span>
            </p>
          </div>
        </div>
      );

    case "socials":
      return (
        <div className={`${styles.heroCard} ${styles.heroCardSoc}`}>
          <h4 className={styles.heroCardTitle}>{block.title}</h4>
          <Socials />
        </div>
      );

    default:
      return null;
  }
}
