"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";
import ImageDesktop from "../../assets/img/faqImg.png";
import Arrow from "@/src/assets/svg/ArrowFaq.svg";
import BgVideo from "@/src/ui/BgVideo/BgVideo";

const FAQContent = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Orci purus tempus in vulputate egestas. Dui mus montes gravida varius quis nulla. Odio nisl in elementum libero viverra magna in. Rhoncus rhoncus tellus metus duis quis.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Orci purus tempus in vulputate egestas. Dui mus montes gravida varius quis nulla. Odio nisl in elementum libero viverra magna in. Rhoncus rhoncus tellus metus duis quis.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Orci purus tempus in vulputate egestas. Dui mus montes gravida varius quis nulla. Odio nisl in elementum libero viverra magna in. Rhoncus rhoncus tellus metus duis quis.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Orci purus tempus in vulputate egestas. Dui mus montes gravida varius quis nulla. Odio nisl in elementum libero viverra magna in. Rhoncus rhoncus tellus metus duis quis.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Orci purus tempus in vulputate egestas. Dui mus montes gravida varius quis nulla. Odio nisl in elementum libero viverra magna in. Rhoncus rhoncus tellus metus duis quis.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleRow = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex]!.style.maxHeight = `${
        contentRefs.current[activeIndex]!.scrollHeight
      }px`;
    }
  }, []);

  return (
    <div className={`${styles.faq} container`}>
      <div className={styles.faqWrapper}>
        <BgVideo
          srcMp4="/videos/mp4/Video-01.mp4"
          srcWebm="/videos/webm/Video-01.webm"
          src="/videos/Video-01.mov"
        />
        <div className={styles.faqTexts}>
          <div className={styles.titleWrapper}>
            <div className={`${styles.title} title`}>FAQ</div>
          </div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Eget mattis nulla id erat
            nulla nibh facilisis vel nisl. Est massa quam id cras semper
            ullamcorper sagittis fermentum suspendisse.
          </div>
          <div className={styles.img}>
            <Image src={ImageDesktop} alt="image" />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {FAQContent.map((card, i) => (
            <div
              className={styles.row}
              key={i}
              onClick={() => toggleRow(i)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.rowTop}>
                <div className={styles.rowTitle}>{card.title}</div>
                <div
                  className={styles.rowIcon}
                  style={{
                    transform:
                      activeIndex === i ? "rotate(-180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  <Image src={Arrow} alt="image" />
                </div>
              </div>

              <div
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                className={styles.rowTextWrapper}
                style={{
                  maxHeight:
                    activeIndex === i
                      ? `${contentRefs.current[i]?.scrollHeight}px`
                      : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}
              >
                <div className={styles.rowText}>{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
