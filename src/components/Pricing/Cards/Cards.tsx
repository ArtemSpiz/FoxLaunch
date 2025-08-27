import Image from "next/image";
import styles from "./Cards.module.css";
import ImageCards from "@/src/assets/img/ManageImg.png";

const leftCards = [
  {
    title: "Challenge-Based Funding",
    subtitle:
      "Join our trading challenges—prove your skills, hit targets, and earn fully funded accounts.",
  },
  {
    title: "Custom-Built Trading Terminal",
    subtitle:
      "Our crypto platform delivers speed and precision with tools built by ex-Bybit and Binance pros.",
  },
  {
    title: "Perpetual Liquidity Pool ",
    subtitle:
      "Our PLP guarantees payouts, eliminating liquidity-related delays that leave traders unpaid.",
  },
];

const rightCards = [
  {
    title: "Challenge-Based Funding",
    subtitle:
      "Join our trading challenges—prove your skills, hit targets, and earn fully funded accounts.",
  },
  {
    title: "Custom-Built Trading Terminal",
    subtitle:
      "Our crypto platform delivers speed and precision with tools built by ex-Bybit and Binance pros.",
  },
  {
    title: "24-48 hr Account Activation",
    subtitle:
      "Pass the challenge, finish KYC, and get live trading accounts in 48 hours.",
  },
];

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
