"use client";

import Image from "next/image";
import styles from "./VisionHero.module.css";
import Copy from "@/src/assets/svg/Copy.svg";
import { useState } from "react";
import BgVideo from "@/src/ui/BgVideo/BgVideo";
import { VisionCards } from "@/src/constants/VisionCards";

export default function VisionHero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className={`${styles.visionHero} heroContainer`}>
      <div className={`${styles.contentWrapperBg}`}>
        <BgVideo
          srcMp4="/videos/mp4/Video-08.mp4"
          srcWebm="/videos/webm/Video-08.webm"
          src="/videos/Video-08.mov"
        />
        <div className={`${styles.contentWrapper} heroContainerMob`}>
          <div className={styles.texts}>
            <div className={`${styles.title} title`}>
              <span>Lorem Ispum</span>
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Eget mattis nulla id erat
              nulla nibh facilisis vel nisl. Est massa quam id cras semper
              ullamcorper sagittis fermentum suspendisse.
            </div>
          </div>

          <div className={styles.cards}>
            {VisionCards.map((card, index) => (
              <div
                className={styles.card}
                key={index}
                onClick={() =>
                  card.icon ? handleCopy(card.subtitle) : undefined
                }
              >
                <div className={styles.cardTitle}>{card.title}</div>
                <div
                  className={`${styles.cardSubtitle} ${
                    styles[`cardSubtitle${index + 1}`]
                  }`}
                >
                  {card.subtitle}
                  {card.icon && (
                    <div className={styles.icon}>
                      <Image src={Copy} alt="image" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* {copied && <div className={styles.copiedNotice}>Copied!</div>} */}
          </div>
        </div>
      </div>
    </div>
  );
}
