"use client";

import { useState, useEffect } from "react";
import styles from "./MetaMask.module.css";
import metaCardImg1 from "../../../assets/img/metaCardImg1.png";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import Image from "next/image";
import Border from "@/src/ui/Border/Border";

const MetaMaskCards = [
  {
    title: "Download MetaMask",
    subtitle:
      "Install the MetaMask extension from the official website or app store",
    image: metaCardImg1,
  },
  {
    title: "Download MetaMask2",
    subtitle:
      "Install the MetaMask extension from the official website or app store",
    image: metaCardImg1,
  },
  {
    title: "Download MetaMask3",
    subtitle:
      "Install the MetaMask extension from the official website or app store",
    image: metaCardImg1,
  },
];

export default function MetaMask() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MetaMaskCards.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + MetaMaskCards.length) % MetaMaskCards.length
      );
      setIsAnimating(false);
    }, 300);
  };
  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className={styles.metaMask}>
      <div className={styles.metaMaskText}>
        <div className={`${styles.metaMaskTitle} title`}>
          Get started MetaMask
        </div>
        <div className={styles.metaMaskSubtitle}>
          Trading firms often face delays and liquidity issues. FundFix solves
          this with our Perpetual Liquidity Pool (PLP), guaranteeing timely
          payouts in any market.
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div
          className={styles.cards}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <div
                className={`${styles.cardContent} ${
                  isAnimating ? styles.fadeOut : styles.fadeIn
                }`}
              >
                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>
                    {MetaMaskCards[currentIndex].title}
                  </div>
                  <div className={styles.cardSubtitle}>
                    {MetaMaskCards[currentIndex].subtitle}
                  </div>
                </div>

                <BlueButton
                  className={styles.cardBtn}
                  text="Learn More About the PLP"
                />
              </div>
              <div className={styles.dots}>
                {MetaMaskCards.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.activeDot : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>

            <div className={styles.cardImgWrapper}>
              <Border
                stroke="#010302"
                width={isMobile ? 20 : 42}
                height={isMobile ? 20 : 42}
                strokeWidth={2}
              />
              <div
                className={`${styles.cardImg} ${
                  isAnimating ? styles.imageSlideOut : styles.imageSlideIn
                }`}
              >
                <Image src={MetaMaskCards[currentIndex].image} alt="image" />
              </div>
              <Border
                stroke="#010302"
                width={isMobile ? 20 : 42}
                height={isMobile ? 20 : 42}
                classBorder={styles.borderBot}
                strokeWidth={2}
              />
            </div>

            <div className={styles.cardBot}>
              <div className={`${styles.dots} ${styles.dotsMob}`}>
                {MetaMaskCards.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.activeDot : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                    disabled={isAnimating}
                  />
                ))}
              </div>
              <BlueButton text="Learn More About the PLP" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
