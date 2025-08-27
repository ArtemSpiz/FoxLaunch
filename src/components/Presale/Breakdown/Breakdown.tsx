"use client";

import Socials from "@/src/ui/Socials/Socials";
import styles from "./Breakdown.module.css";
import Wallet from "../../../assets/svg/Wallet.svg";
import BreakdownIcon1 from "../../../assets/svg/BreakdownIcon1.svg";
import BreakdownIcon2 from "../../../assets/svg/BreakdownIcon2.svg";
import BreakdownIcon3 from "../../../assets/svg/BreakdownIcon3.svg";
import BreakdownIcon4 from "../../../assets/svg/BreakdownIcon4.svg";
import BreakdownImg1 from "../../../assets/img/BreakdownImg1.png";
import BreakdownImg2 from "../../../assets/img/BreakdownImg2.png";
import BreakdownImg3 from "../../../assets/img/BreakdownImg3.png";
import BreakdownCoin from "../../../assets/img/BreakdownCoin.png";
import Image from "next/image";
import Border from "@/src/ui/Border/Border";
import BreakdownCoinMob from "../../../assets/img/BreakdownCoinMob.png";
import { useEffect, useState } from "react";
import BreakGlow from "../../../assets/svg/BreakGlow.svg";
import BreakdownGlowDesk from "@/src/assets/img/BreakdownGlow.png";

const BreakdownCards = [
  {
    icon: BreakdownIcon1,
    title: "Private Sale",
    price: "$0.010 per $FIX",
    bonus: "Early Access",
    minInvestment: "$5,000",
    vesting: "10% at TGE, 90% over 6m",
  },
  {
    icon: BreakdownIcon2,
    title: "Pre-Sale",
    price: "$0.015 per $FIX",
    bonus: "20% Extra Tokens",
    minInvestment: "$500",
    vesting: "20% at TGE, 80% over 4m",
  },
  {
    icon: BreakdownIcon3,
    title: "Public Sale",
    price: "$0.015 per $FIX",
    bonus: "20% Extra Tokens",
    minInvestment: "$500",
    vesting: "20% at TGE, 80% over 4m",
  },
  {
    icon: BreakdownIcon4,
    title: "Pre-Sale",
    description:
      "By participating in the presale, you can secure early access, benefit from bonuses, and be part of Fundfix from the start. Our presale is structured to reward early participants and provide maximum value.",
    investors: [
      { image: BreakdownImg1, name: "Adam Smith", funded: "$40K" },
      { image: BreakdownImg2, name: "Luisa", funded: "$200K" },
      { image: BreakdownImg3, name: "Alex D&D", funded: "$40K" },
    ],
  },
  {
    icon: BreakdownIcon4,
    title: "$FIX Token",
    description:
      "The $FIX token is your key to accessing premium trading features, revenue-sharing opportunities, and more on the Fundfix platform.",
  },
];

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
