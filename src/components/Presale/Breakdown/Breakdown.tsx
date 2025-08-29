"use client";

import Socials from "@/src/ui/Socials/Socials";
import styles from "./Breakdown.module.css";
import Wallet from "../../../assets/svg/Wallet.svg";
import BreakdownCoin from "../../../assets/img/BreakdownCoin.png";
import Image from "next/image";
import Border from "@/src/ui/Border/Border";
import BreakdownCoinMob from "../../../assets/img/BreakdownCoinMob.png";
import { useEffect, useState } from "react";
import BreakGlow from "../../../assets/svg/BreakGlow.svg";
import BreakdownGlowDesk from "@/src/assets/img/BreakdownGlow.png";
import { BreakdownCards } from "@/src/constants/BreakdownCards";



export default function Breakdown() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.breakdown} container`}>
      <div className={styles.breakdownText}>
        <div className={`${styles.title} title`}>Presale Stages Breakdown</div>
        <Socials
          wrapperClass={styles.iconsSubtitle}
          enableHover={false}
          links={[
            {
              name: "Wallet",
              icon: Wallet,
            },
            {
              name: "Wallet",
              icon: Wallet,
            },
            {
              name: "Wallet",
              icon: Wallet,
            },
          ]}
          stroke="#A5C6E2"
        />
      </div>

      <div className={styles.cards}>
        <div className={styles.Glow}>
          <Image src={BreakGlow} alt="image" />
        </div>
        <div className={styles.GlowDesk}>
          <Image src={BreakdownGlowDesk} alt="image" />
        </div>
        <div className={styles.cardsCoin}>
          <Image
            src={isMobile ? BreakdownCoinMob : BreakdownCoin}
            alt="image"
          />
        </div>
        {BreakdownCards.map((card, index) => (
          <div
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
            key={index}
          >
            <div className={styles.cardTop}>
              <Socials
                enableHover={false}
                wrapperClass={styles.iconsCard}
                links={[{ name: card.icon, icon: card.icon }]}
                stroke="#A5C6E2"
              />
              <div className={styles.cardTitle}>{card.title}</div>
            </div>

            {card.price && (
              <div className={styles.cardContentTable}>
                <div className={styles.cardTableLine}>
                  Price: <span>{card.price}</span>
                </div>
                <div className={styles.cardTableLine}>
                  Bonus <span>{card.bonus}</span>
                </div>
                <div className={styles.cardTableLine}>
                  Min. Investment <span>{card.minInvestment}</span>
                </div>
                <div className={styles.cardTableLine}>
                  Vesting <span>{card.vesting}</span>
                </div>
              </div>
            )}

            {card.description && (
              <div className={styles.cardContentDesc}>
                <div className={styles.cardDescInvestors}>
                  {card.investors?.map((invest, i) => (
                    <div
                      className={`${styles.cardInvestor} ${
                        i === 1 ? styles.active : ""
                      }`}
                      key={i}
                    >
                      <Border stroke="#A5C6E2" />
                      <div className={styles.cardInvestorWrap}>
                        <div
                          className={`${styles.cardInvestorImg} ${
                            i === 1 ? styles.active : ""
                          }`}
                        >
                          <Image src={invest.image} alt="image" />
                        </div>

                        <div className={styles.cardInvestorDesc}>
                          <div
                            className={`${styles.cardInvestorName} ${
                              i === 1 ? styles.active : ""
                            }`}
                          >
                            {invest.name}
                          </div>
                          <div
                            className={`${styles.cardInvestorFunded} ${
                              i === 1 ? styles.active : ""
                            }`}
                          >
                            Funded
                            <span>{invest.funded}</span>
                          </div>
                        </div>
                      </div>
                      <Border
                        stroke="#A5C6E2"
                        classBorder={styles.borderBottom}
                      />
                    </div>
                  ))}
                </div>

                <div
                  className={`${styles.cardDescText} ${
                    styles[`cardDescText${index + 1}`]
                  }`}
                >
                  {card.description}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
