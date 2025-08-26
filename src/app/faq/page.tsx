import FAQSection from "@/src/components/FAQ/FAQSection";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";

export default function FAQ() {
  return (
    <div className={styles.FAQ}>
      <Header />
      <FAQSection />
      <Footer />
    </div>
  );
}
