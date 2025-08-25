import NewsHero from "@/src/components/News/Hero";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";

export default function News() {
  return (
    <div className={styles.News}>
      <Header />
      <NewsHero />
      <Footer />
    </div>
  );
}
