import HeroPresale from "@/src/components/Presale/Hero/HeroPresale";
import Trouble from "../../components/Trouble/Trouble";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";

export default function Features() {
  return (
    <div className={styles.Home}>
      <Header />
      <HeroPresale />
      {/* <Trouble /> */}
      <Footer />
    </div>
  );
}
