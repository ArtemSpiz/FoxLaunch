import OnChainHero from "@/src/components/onChain/onChainHero";
import Header from "../../layout/Header/Header";
import styles from "../page.module.css";

export default function onChain() {
  return (
    <div className={styles.onChain}>
      <Header />
      <OnChainHero />
    </div>
  );
}
