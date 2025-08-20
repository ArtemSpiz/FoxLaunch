import Hero from "../components/Home/Hero/Hero";
import Header from "../layout/Header/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
    </div>
  );
}
