import styles from "./Contributors.module.css";
import CoinContr from "../../../assets/svg/CoinContr.svg";
import Socials from "@/src/ui/Socials/Socials";

import Angle from "../../../assets/img/contributorsAngleCard.png";
import Image from "next/image";
import BlueButton from "@/src/ui/BlueButton/BlueButton";

const CardLeftContent = [
  {
    icon: CoinContr,
    title: "Live Ranking Updates",
    subtitle: "View the top contributors in real-time",
  },
  {
    icon: CoinContr,
    title: "Live Ranking Updates",
    subtitle: "View the top contributors in real-time",
  },
  {
    icon: CoinContr,
    title: "Live Ranking Updates",
    subtitle: "View the top contributors in real-time",
  },
];

const CardRightCont = [
  {
    rank: 1,
    color: "#F7FA5A",
    wallet: "0x098...1680",
    deposit: "$800",
    tokens: "500 $FIX",
  },
  {
    rank: 2,
    color: "#FA5A6D",
    wallet: "0x986...4126",
    deposit: "$700",
    tokens: "400 $FIX",
  },
  {
    rank: 3,
    color: "#56FFE1",
    wallet: "0x325...6555",
    deposit: "$600",
    tokens: "320 $FIX",
  },
  {
    rank: 4,
    color: "",
    wallet: "0x581...9726",
    deposit: "$5500",
    tokens: "250 $FIX",
  },
  {
    rank: 5,
    color: "",
    wallet: "0x327...5672",
    deposit: "$420",
    tokens: "100 $FIX",
  },
  {
    rank: 6,
    color: "",
    wallet: "0x217...4961",
    deposit: "$400",
    tokens: "80 $FIX",
  },
  {
    rank: 7,
    color: "",
    wallet: "0x217...4961",
    deposit: "$400",
    tokens: "60 $FIX",
  },
];

export default function Contributors() {
  return (
    <div className={styles.contributors}>
      <div className={styles.text}>
        <div className={`${styles.title} title`}>
          Top contributors leading the wey{" "}
        </div>
        <div className={styles.subtitle}>
          See who’s leading the presale and aim for the top. Top contributors
          will be rewarded with exclusive bonuses and recognition. Check your
          position on the leaderboard and see who’s investing in FundFix
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardLeft}>
          <div className={styles.cardTitle}>Leaderboard Features</div>

          <div className={styles.cardLeftCont}>
            {CardLeftContent.map((card, index) => (
              <div className={styles.cardLeftRow} key={index}>
                <Socials
                  wrapperClass={styles.cardLeftIcon}
                  enableHover={false}
                  stroke="#A5C6E2"
                  links={[{ name: "cardLeftIcon", icon: card.icon }]}
                />
                <div className={styles.cardLeftContTexts}>
                  <div className={styles.cardLeftContTitle}>{card.title}</div>
                  <div className={styles.cardLeftContSubtitle}>
                    {card.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cardRightWrapper}>
          <div className={styles.cardRight}>
            <div className={styles.cardRightTags}>
              <span>Rank</span>
              <span>Wallet Address</span>
              <span>Deposit</span>
              <span>Tokens</span>
            </div>

            <div className={styles.cardRightCont}>
              {CardRightCont.map((card, index) => (
                <div key={index} className={styles.cardRow}>
                  <div className={styles.rank}>
                    {card.color ? (
                      <span
                        className={styles.colorRank}
                        style={{
                          backgroundColor: card.color,
                        }}
                      >
                        {card.rank}
                      </span>
                    ) : (
                      card.rank
                    )}
                  </div>
                  <div className={styles.cardRowText}>{card.wallet}</div>
                  <div className={`${styles.cardRowText} ${styles.cardDep}`}>
                    {card.deposit}
                  </div>
                  <div className={`${styles.cardRowText} ${styles.cardTok}`}>
                    {card.tokens}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BlueButton text="Check the Leadeboard" className={styles.btn} />
    </div>
  );
}
