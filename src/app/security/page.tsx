"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Trouble from "../../components/Trouble/Trouble";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import SecurityBg from "../../assets/img/SecurityBg.png";
import SecurityBgMob from "../../assets/img/SecurityBgMob.png";
import SecurityCards from "@/src/constants/SecurityCards";

export default function Security() {
  const [bgImage, setBgImage] = useState(SecurityBg);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBgImage(SecurityBgMob);
    } else {
      setBgImage(SecurityBg);
    }
  }, []);

  return (
    <div className={styles.Security}>
      <Header />
      <Hero2x3
        bgVideoWay="/videos/Video-03.mov"
        bgVideoWayMp4="/videos/mp4/Video-03.mp4"
        bgVideoWayWebm="/videos/webm/Video-03.webm"
        bgImage={bgImage}
        content={{
          title: "FundFix Prime",
          subtitle: "Elevating Traditional Traders with Web3 Innovations",
          text: "FundFix Prime is where traditional traders elevate their game. Funded accounts enhanced with the latest Web3 tech give you an edge that others won't see coming.",
        }}
        layout={{
          typeOfWrapper: "cardsWrapper2",
        }}
        cards={{
          enabled: true,
          type: "2",
          data: SecurityCards,
        }}
      />

      <Footer />
    </div>
  );
}
