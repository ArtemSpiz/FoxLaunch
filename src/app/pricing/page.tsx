"use client";
import { useEffect, useState } from "react";
import Hero2x3 from "@/src/ui/Hero2x3/Hero2x3";
import Trouble from "../../components/Trouble/Trouble";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import PricingHeroBg from "../../assets/img/PricingHeroBg.png";
import PricingHeroBgMob from "../../assets/img/PricingHeroBgMob.png";
import Cards from "@/src/components/Pricing/Cards/Cards";
import Scaling from "@/src/components/Pricing/Scaling/Scaling";

export default function Pricing() {
  const [bgImage, setBgImage] = useState(PricingHeroBg);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBgImage(PricingHeroBgMob);
    } else {
      setBgImage(PricingHeroBg);
    }
  }, []);

  return (
    <div className={styles.Pricing}>
      <Header />
      <Hero2x3
        bgImage={bgImage}
        hero={{
          title: "FundFix Crypto Prop Trading (CPT)",
          subtitle: "Unlocking Fully Funded Accounts for Crypto Traders",
          text: "At the heart of FundFix is FundFix CPT, your direct line to substantial capital. Crypto markets wait for no one, and with our challenge-based model, you'll be trading with firm-backed capital before others even realize what's happening.",
        }}
      />
      <Cards />
      <Scaling />
      <Trouble />
      <Footer />
    </div>
  );
}
