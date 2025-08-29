"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import PressBg from "../../assets/img/PressBg.png";
import PressBgMob from "../../assets/img/PressBgMob.png";
import MediaCards from "@/src/constants/MediaCards";

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
        bgVideoWay="/videos/Video-05.mov"
        bgVideoWayMp4="/videos/mp4/Video-05.mp4"
        bgVideoWayWebm="/videos/webm/Video-05.webm"
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
          data: MediaCards,
        }}
      />

      <Footer />
    </div>
  );
}
