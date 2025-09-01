import Create from "../components/Home/Create/Create";
import Ecosystem from "../components/Home/Ecosystem/Ecosystem";
import FIX from "../components/Home/FIX/FIX";
import Hero from "../components/Home/Hero/Hero";
import Made from "../components/Home/Made/Made";
import Never from "../components/Home/Never/Never";
import WhoWeAre from "../components/Home/WhoWeAre/WhoWeAre";
import Trouble from "../components/Trouble/Trouble";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import styles from "../app/page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Made />
      <WhoWeAre />
      <Never />
      <FIX />
      <Ecosystem />
      <Create />
      <Trouble />
      <Footer />
    </div>
  );
}
