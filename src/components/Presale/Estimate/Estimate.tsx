"use client";

import styles from "./Estimate.module.css";
import EstimateGridImg from "../../../assets/img/estimateGridImg.png";

import EstimateCoin from "../../../assets/svg/EstimateCoin.svg";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import Image from "next/image";
import Socials from "@/src/ui/Socials/Socials";
import { useState } from "react";

const EstimateGridContent = [
  {
    title: "Estimate your Investment",
    btn: "Try the Presale Calculator",
    subtitle:
      "Use our presale calculator to see how many $FIX tokens you’ll receive based on your investment. Input your amount and view potential returns",
  },
  {
    onlySubtitle: true,
    subtitle:
      "Use our presale calculator to see how many $FIX tokens you’ll receive based on your investment. Input your amount and view potential returns",
  },
  {
    image: EstimateGridImg,
  },
  {
    title: "Calculator Features",
    subtitles: [
      {
        icon: EstimateCoin,
        title: "Live Ranking Updates",
        subtitle: "View the top contributors in real-time",
      },
      {
        icon: EstimateCoin,
        title: "Live Ranking Updates",
        subtitle: "View the top contributors in real-time",
      },
    ],
  },
];

const BDAG_BASE = 5_255_460;
const USD_BASE = 3_170_000;
const CONVERSION_RATE = USD_BASE / BDAG_BASE;

export default function Estimate() {
  const [rangeValue, setRangeValue] = useState<number>(20);
  const [bdagAmount, setBdagAmount] = useState<string>("5,255,460");
  const [usdAmount, setUsdAmount] = useState<string>("$3.17M");
  const [bonus, setBonus] = useState<number>(20);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRangeValue(value);

    const newBonus = Math.round(value);
    setBonus(newBonus);
  };

  const formatUSD = (value: number): string => {
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    } else if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  const handleBdagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(inputVal))) {
      setBdagAmount(inputVal);
      const usd = Number(inputVal) * CONVERSION_RATE;
      setUsdAmount(formatUSD(usd));
    }
  };

  const formatInputValue = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputFocus = () => {
    if (bdagAmount === "5,255,460") {
      setBdagAmount("");
      setUsdAmount("$0");
    }
  };

  return (
    <div className={`${styles.estimate} container`}>
      <div className={styles.estimateGrid}>
        {EstimateGridContent.map((card, index) => (
          <div key={index} className={styles.estimateGridCard}>
            {card.btn && (
              <>
                <div className={`${styles.estimateTitle} title`}>
                  {card.title}
                </div>
                <div
                  className={`${styles.estimateSubtitle} ${styles.estimateSubtitleMob}`}
                >
                  {card.subtitle}
                </div>
                <BlueButton text={card.btn} />
              </>
            )}
            {card.onlySubtitle && (
              <>
                <div className={styles.estimateSubtitle}>{card.subtitle}</div>
              </>
            )}
            {card.image && (
              <div className={styles.estimateGridCardImg}>
                <Image src={card.image} alt="image" />
              </div>
            )}
            {card.subtitles && (
              <>
                <div className={styles.cardSubsTitle}>{card.title}</div>
                <div className={styles.cardSubtitles}>
                  {card.subtitles.map((sub, i) => (
                    <div className={styles.cardSub} key={i}>
                      <Socials
                        wrapperClass={styles.cardSubIcon}
                        stroke="#A5C6E2"
                        links={[{ name: "cardSubIcon", icon: sub.icon }]}
                      />

                      <div className={styles.cardSubTexts}>
                        <div className={styles.cardSubTitle}>{sub.title}</div>
                        <div className={styles.cardSubSubtitle}>
                          {sub.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className={styles.cardRight}>
        <div className={styles.cardTop}>
          <div className={styles.cardTexts}>
            <div className={styles.cardTitle}>Buy $FIX</div>
            <div className={styles.cardSubtitle}>
              Enter how much BDAG coins you have in the input below{" "}
            </div>
          </div>

          <div className={styles.cardInputs}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputTitle}>Enter</div>
              <input
                className={styles.input}
                value={formatInputValue(bdagAmount)}
                onChange={handleBdagChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputTitle}>USD Amount</div>
              <div className={styles.inputAmount}>{usdAmount}</div>
            </div>
          </div>
        </div>

        <div className={styles.cardBot}>
          <div className={styles.cardRightContent}>
            <div className={styles.cardRightCol}>
              Stage <span>Private Sale</span>
            </div>
            <div className={styles.cardRightCol}>
              Bonus <span>{bonus}%</span>
            </div>
            <div className={styles.cardRightCol}>
              Current Price <span>$0.0020</span>
            </div>
          </div>

          <input
            type="range"
            className={styles.cardInpRange}
            min="0"
            max="100"
            value={rangeValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  );
}
