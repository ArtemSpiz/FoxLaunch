import styles from "./Contributors.module.css";
import Socials from "@/src/ui/Socials/Socials";
import Angle from "../../../assets/img/contributorsAngleCard.png";
import Image from "next/image";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import { CardLeftContent, CardRightCont } from "@/src/constants/ContributorsCards";

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
