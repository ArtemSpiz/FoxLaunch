"use client";

import BlueButton from "@/src/ui/BlueButton/BlueButton";
import styles from "./Never.module.css";
import neverCardLeftImg1 from "../../../assets/img/neverCardLeftImg1.png";
import { useEffect, useState } from "react";
import neverRightIcon1 from "../../../assets/svg/neverRightIcon1.svg";
import neverRightIcon2 from "../../../assets/svg/neverRightIcon2.svg";
import neverRightIcon3 from "../../../assets/svg/neverRightIcon3.svg";
import Image from "next/image";
import ArrowNever from "../../../assets/svg/ArrowNever.svg";

const LeftCardContent = [
  {
    title: "We never run out of funds",
    subtitle:
      "Trading firms often face delays and liquidity issues. FundFix solves this with our Perpetual Liquidity Pool (PLP), guaranteeing timely payouts in any market.",
    btn: true,
    image: neverCardLeftImg1,
  },
  {
    title: "We never run out of funds 2",
    subtitle:
      "Trading firms often face delays and liquidity issues. FundFix solves this with our Perpetual Liquidity Pool (PLP), guaranteeing timely payouts in any market. 2",
    btn: true,
    image: neverCardLeftImg1,
  },
];

const RightCardContent = {
  traders: [
    {
      icon: neverRightIcon1,
      title: "Reliable Payouts",
      subtitle: "Always get paid on time without delays",
    },
    {
      icon: neverRightIcon2,
      title: "Stability",
      subtitle: "Always get paid on time without delays",
    },
    {
      icon: neverRightIcon3,
      title: "Transparency",
      subtitle: "Always get paid on time without delays",
    },
  ],
  works: [
    {
      icon: neverRightIcon1,
      title: "Reliable Payouts 2",
      subtitle: "Always get paid on time without delays 2",
    },
    {
      icon: neverRightIcon2,
      title: "Stability 2",
      subtitle: "Always get paid on time without delays 2",
    },
    {
      icon: neverRightIcon3,
      title: "Transparency 2",
      subtitle: "Always get paid on time without delays 2",
    },
  ],
};

export default function Never() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeTab, setActiveTab] = useState<"traders" | "works">("traders");
  const [fadeRight, setFadeRight] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 👈 стейт для відкритої картки

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % LeftCardContent.length);
      setFade(true);
    }, 300);
  };

  const handlePagClick = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 300);
  };

  const handleTabClick = (tab: "traders" | "works") => {
    if (tab === activeTab) return;
    setFadeRight(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFadeRight(true);
      setOpenIndex(null);
    }, 300);
  };

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const card = LeftCardContent[activeIndex];

  return (
    <div className={styles.neverWrapper}>
      <div className={`${styles.never} container`}>
        <div className={styles.neverCardLeft}>
          <div
            className={`${styles.neverCardLeftContent} ${
              fade ? styles.fadeInLeft : styles.fadeOutLeft
            }`}
          >
            <div className={styles.neverCardLeftTexts}>
              <div className={styles.neverCardLeftTitle}>{card.title}</div>
              <div className={styles.neverCardLeftSubtitle}>
                {card.subtitle}
              </div>
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

          <div className={styles.neverCardLeftPags}>
            {LeftCardContent.map((_, i) => (
              <span
                key={i}
                onClick={() => handlePagClick(i)}
                className={`${styles.pagDot} ${
                  i === activeIndex ? styles.activeDot : ""
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className={styles.neverLine}></div>

        <div className={styles.neverCardRight}>
          <div className={styles.neverCardRightTypes}>
            <div
              className={`${styles.neverCardRightType} ${
                activeTab === "traders" ? styles.activeTab : styles.nonActive
              }`}
              onClick={() => handleTabClick("traders")}
            >
              What It Means for Traders?
            </div>
            <div
              className={`${styles.neverCardRightType} ${
                activeTab === "works" ? styles.activeTab : styles.nonActive
              }`}
              onClick={() => handleTabClick("works")}
            >
              How it works?
            </div>
          </div>

          <div
            className={`${styles.neverCardRightWrapper} ${
              fadeRight ? styles.fadeIn : styles.fadeOut
            }`}
          >
            {RightCardContent[activeTab].map((card, index) => (
              <div
                key={index}
                className={`${styles.neverCardRightContent}`}
                onClick={() => toggleOpen(index)}
              >
                <div className={styles.neverCardRContTop}>
                  <div className={styles.neverCardRContTitle}>
                    <div className={styles.neverCardRContIcon}>
                      <Image src={card.icon} alt="" />
                    </div>
                    {card.title}
                  </div>

                  <div
                    className={`${styles.neverCardRArrow} ${
                      openIndex === index ? styles.arrowOpen : ""
                    }`}
                  >
                    <Image src={ArrowNever} alt="" />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
