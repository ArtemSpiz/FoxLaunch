import CryptoHero from "@/src/components/Crypto/CryptoHero";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";

export default function Trading() {
  return (
    <div className={styles.Trading}>
      <Header />
      <CryptoHero mode="trading-rules" />
      <Footer />
    </div>
  );
}
