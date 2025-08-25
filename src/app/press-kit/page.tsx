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
    title: "AI Market Insights",
    subtitle:
      "Real-time, AI-powered insights help you make smarter trades by identifying opportunities no human could spot.",
  },
  {
    icon: Icon2,
    image: Image2,
    title: "Copy Trading",
    subtitle:
      "Follow the pros. Mirror the moves of top-performing traders and share in their success.",
  },
  {
    icon: Icon3,
    image: Image3,
    title: "Lead Trader Program",
    subtitle:
      "Ready to lead? Become a top trader and earn up to 30% from those who copy your trades.",
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
          imageClass: "imageType5",
          cardClass: styles.legalCard,
          data: PressCards,
        }}
      />

      <Footer />
    </div>
  );
}
