"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import bg from "../../assets/img/LegalBg.png";
import bgMob from "../../assets/img/LegalBg.png";
import LegalCards from "@/src/constants/LegalCards";

export default function Legal() {
  const [bgImage, setBgImage] = useState(bg);
  const [textWrapper, setTextWrapper] = useState<
    "textWrapper" | "textWrapper2"
  >("textWrapper");

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBgImage(bgMob);
      setTextWrapper("textWrapper2");
    } else {
      setBgImage(bg);
      setTextWrapper("textWrapper");
    }
  }, []);

  return (
    <div className={styles.Legal}>
      <Header />
      <Hero2x3
        bgVideoWay="/videos/Video-06.mov"
        bgVideoWayMp4="/videos/mp4/Video-06.mp4"
        bgVideoWayWebm="/videos/webm/Video-06.webm"
        bgImage={bgImage}
        content={{
          title: "AI Signals & Copy Trading",
          subtitle: "Trading Smarter, Not Harder",
          text: "The FundFix Dashboard is where everything comes together. Your trades, performance, rewards—everything in one sleek, intuitive interface.",
        }}
        layout={{
          heroTextClass: "p56",
          texts: "texts2",
          textJC: "jcE",
          textClass: "p56",
          textWrapper: textWrapper,
        }}
        cards={{
          enabled: true,
          type: "1",
          imageClass: "imageType4",
          cardClass: styles.legalCard,
          data: LegalCards,
        }}
      />

      <Footer />
    </div>
  );
}
