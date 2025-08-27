"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import bg from "../../assets/img/KitBg.png";
import bgMob from "../../assets/img/KitBgMob.png";
import Icon1 from "@/src/assets/svg/KitIcon1.svg";
import Icon2 from "@/src/assets/svg/KitIcon2.svg";
import Icon3 from "@/src/assets/svg/KitIcon3.svg";

import Image1 from "@/src/assets/img/KitImg1.png";
import Image2 from "@/src/assets/img/KitImg2.png";
import Image3 from "@/src/assets/img/KitImg3.png";

const PressCards = [
  {
    icon: Icon1,
    image: Image1,
    title: "Global Acceptance",
    subtitle:
      "Use your FundFix Crypto Card anywhere major credit cards are accepted—from restaurants to retail.",
  },
  {
    icon: Icon2,
    image: Image2,
    title: "Instant Conversions",
    subtitle: "Convert crypto to fiat in real-time. No hassle, no delays.",
  },
  {
    icon: Icon3,
    image: Image3,
    title: "Rewards on Every Swipe",
    subtitle:
      "Earn benefits with every transaction. More trading, more spending, more rewards.",
  },
];

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
          data: PressCards,
        }}
      />

      <Footer />
    </div>
  );
}
