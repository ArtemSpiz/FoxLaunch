"use client";

import { useEffect, useState } from "react";
import styles from "./Never.module.css";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import {
  LeftCardContent,
  RightCardContent,
} from "../../../constants/NeverContent";

export default function Never() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeTab, setActiveTab] = useState<"traders" | "works">("traders");
  const [fadeRight, setFadeRight] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 10000);
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

  const toggleOpen = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const card = LeftCardContent[activeIndex];

  return (
    <div className={styles.neverWrapper}>
      <div className={`${styles.never} container`}>
        <div className={styles.neverCardLeft}>
          <LeftCard card={card} fade={fade} />
          <div className={styles.neverCardLeftPags}>
            {LeftCardContent.map((_, i) => (
              <span
                key={i}
                onClick={() => handlePagClick(i)}
                className={`${styles.pagDot} ${
                  i === activeIndex ? styles.activeDot : ""
                }`}
              />
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
              <RightCard
                key={index}
                card={card}
                index={index}
                openIndex={openIndex}
                toggleOpen={toggleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
