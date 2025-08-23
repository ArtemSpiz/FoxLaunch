import HeroPresale from "@/src/components/Presale/Hero/HeroPresale";
import Trouble from "../../components/Trouble/Trouble";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";
import Breakdown from "@/src/components/Presale/Breakdown/Breakdown";
import FIXPresale from "@/src/components/Presale/FIX/FIXPresale";
import MetaMask from "@/src/components/Presale/MetaMask/MetaMask";
import Contributors from "@/src/components/Presale/Contributors/Contributors";

export default function Features() {
  return (
    <div className={styles.Home}>
      <Header />
      <HeroPresale />
      <Breakdown />
      <FIXPresale />
      <MetaMask />
      <Contributors />
      <Trouble />
      <Footer />
    </div>
  );
}
