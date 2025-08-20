import Hero from "../components/Home/Hero/Hero";
import Made from "../components/Home/Made/Made";
import Never from "../components/Home/Never/Never";
import WhoWeAre from "../components/Home/WhoWeAre/WhoWeAre";
import Header from "../layout/Header/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Made />
      <WhoWeAre />
      <Never />
    </div>
  );
}
