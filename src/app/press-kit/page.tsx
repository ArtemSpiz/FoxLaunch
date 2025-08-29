"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import bg from "../../assets/img/KitBg.png";
import bgMob from "../../assets/img/KitBgMob.png";

import KirCards from "@/src/constants/KitCards";

export default function Kit() {
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
    <div className={styles.Kit}>
      <Header />
      <Hero2x3
        bgVideoWay="/videos/Video-07.mov"
        bgVideoWayMp4="/videos/mp4/Video-07.mp4"
        bgVideoWayWebm="/videos/webm/Video-07.webm"
        bgImage={bgImage}
        content={{
          title: "Crypto Card Integration",
          subtitle: "Spend Your Crypto Anywhere",
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
          imageClass: "imageType5",
          cardClass: styles.legalCard,
          data: KirCards,
        }}
      />

      <Footer />
    </div>
  );
}
