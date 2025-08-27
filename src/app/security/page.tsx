"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Trouble from "../../components/Trouble/Trouble";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import SecurityBg from "../../assets/img/SecurityBg.png";
import SecurityBgMob from "../../assets/img/SecurityBgMob.png";
import SecurityIcon1 from "@/src/assets/svg/SecurityIcon1.svg";
import SecurityIcon2 from "@/src/assets/svg/SecurityIcon2.svg";
import SecurityIcon3 from "@/src/assets/svg/SecurityIcon3.svg";
import SecurityIcon4 from "@/src/assets/svg/SecurityIcon4.svg";

import SecurityImg1 from "@/src/assets/img/SecurityImg1.png";
import SecurityImg2 from "@/src/assets/img/SecurityImg2.png";

const SecurityCards = [
  {
    icon: SecurityIcon1,
    image: SecurityImg1,
    title: "Challenge-Based Funding",
    subtitle:
      "Join our trading challenges—prove your skills, hit targets, and earn fully funded accounts.",
  },
  {
    icon: SecurityIcon2,
    title: "Trade Major Markets",
    subtitle:
      "Trade stocks, forex, and commodities with real capital—no more small plays.",
  },
  {
    icon: SecurityIcon3,
    title: "Web3 Integration",
    subtitle:
      "Get Web3 perks—$FIX revenue sharing and NFT accounts for next-gen trading.",
  },
  {
    icon: SecurityIcon4,
    image: SecurityImg2,
    title: "Payouts in 24 Hours",
    subtitle:
      "Hit targets and get paid in USDT or to your bank within 24 hours.",
  },
];

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
