"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import PressBg from "../../assets/img/PressBg.png";
import PressBgMob from "../../assets/img/PressBgMob.png";
import Icon1 from "@/src/assets/svg/PressIcon1.svg";
import Icon2 from "@/src/assets/svg/PressIcon2.svg";
import Icon3 from "@/src/assets/svg/PressIcon3.svg";

import Image1 from "@/src/assets/img/PressImg1.png";
import Image2 from "@/src/assets/img/PressImg2.png";
import Image3 from "@/src/assets/img/PressImg3.png";

const PressCards = [
  {
    icon: Icon1,
    image: Image1,
    title: "Track Your Success",
    subtitle: "Monitor your performance with analytics that detail every move.",
  },
  {
    icon: Icon2,
    image: Image2,
    title: "Claim Your Rewards",
    subtitle:
      "With $FIX tokens, you earn a share of platform revenue, and the dashboard makes tracking and claiming easy.",
  },
  {
    icon: Icon3,
    image: Image3,
    title: "Full Transparency",
    subtitle:
      "Every transaction is recorded on the blockchain, ensuring everything is legitimate.",
  },
];

export default function Press() {
  const [bgImage, setBgImage] = useState(PressBg);
  const [textWrapper, setTextWrapper] = useState<
    "textWrapper" | "textWrapper2"
  >("textWrapper");

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBgImage(PressBgMob);
      setTextWrapper("textWrapper2");
    } else {
      setBgImage(PressBg);
      setTextWrapper("textWrapper");
    }
  }, []);

  return (
    <div className={styles.Press}>
      <Header />
      <Hero2x3
        bgImage={bgImage}
        content={{
          title: "FundFix Dashboard",
          subtitle: "Your Command Center",
          text: "Ready to elevate your trading game? With FundFix OnChain, you gain instant access to funded wallets—no delays, no lengthy setup. Just plug in and start trading right away.",
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
          imageClass: "imageType3",
          cardClass: styles.legalCard,
          data: PressCards,
        }}
      />

      <Footer />
    </div>
  );
}
