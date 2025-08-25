import VisionHero from "@/src/components/Vision/Hero";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";

export default function Vision() {
  return (
    <div className={styles.Vision}>
      <Header />
      <VisionHero />
      <Footer />
    </div>
  );
}
