"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import SecurityBg from "../../assets/img/SecurityBg.png";
import AboutBgMob from "../../assets/img/AboutBgMob.png";

import AboutCards from "@/src/constants/AboutCards";

export default function About() {
  const [bgImage, setBgImage] = useState(SecurityBg);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBgImage(AboutBgMob);
    } else {
      setBgImage(SecurityBg);
    }
  }, []);

  return (
    <div className={styles.About}>
      <Header />
      <Hero2x3
        bgVideoWay="/videos/Video-04.mov"
        bgVideoWayMp4="/videos/mp4/Video-04.mp4"
        bgVideoWayWebm="/videos/webm/Video-04.webm"
        bgImage={bgImage}
        content={{
          title: "FundFix OnChain",
          subtitle: "Go Full Degen with zero risk",
          text: "Ready to elevate your trading game? With FundFix OnChain, you gain instant access to funded wallets—no delays, no lengthy setup. Just plug in and start trading right away.",
        }}
        layout={{
          heroTextClass: "p56",
          heroTextJC: "jcS",
          texts: "texts2",
          textJC: "jcE",
          textClass: "p56",
          textWrapper: "textWrapper2",
        }}
        cards={{
          enabled: true,
          imageClass: "imageType2",
          data: AboutCards,
        }}
      />

      <Footer />
    </div>
  );
}
