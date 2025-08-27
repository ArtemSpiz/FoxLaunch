"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import SecurityBg from "../../assets/img/SecurityBg.png";
import AboutBgMob from "../../assets/img/AboutBgMob.png";
import AboutIcon1 from "@/src/assets/svg/AboutIcon1.svg";
import AboutIcon2 from "@/src/assets/svg/AboutIcon2.svg";
import AboutIcon3 from "@/src/assets/svg/AboutIcon3.svg";

import AboutImg1 from "@/src/assets/img/AboutImg1.png";
import AboutImg2 from "@/src/assets/img/AboutImg2.png";
import AboutImg3 from "@/src/assets/img/AboutImg3.png";

const AboutCards = [
  {
    icon: AboutIcon1,
    image: AboutImg1,
    title: "Courses That Matter",
    subtitle:
      "From trading basics to advanced DeFi strategies, we cover it all. Learn at your pace but be ready to apply it fast.",
  },
  {
    icon: AboutIcon2,
    image: AboutImg2,
    title: "Expert Content",
    subtitle:
      "Our courses are taught by top traders who've been through the fire  and emerged victorious.",
  },
  {
    icon: AboutIcon3,
    image: AboutImg3,
    title: "Community Engagement",
    subtitle:
      "Join webinars, forums, and workshops to connect with traders, share strategies, and learn from their successes.",
  },
];

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
