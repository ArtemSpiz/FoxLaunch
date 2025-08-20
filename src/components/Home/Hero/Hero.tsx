import styles from "./Hero.module.css";
import HeroBlock from "./HeroBlock";
import HeroGridContent from "../../../constants/HeroGridContent";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        {HeroGridContent.map((block, index) => (
          <div key={index} className={styles.heroBlock}>
            <HeroBlock block={block} />
          </div>
        ))}
      </div>
    </div>
  );
}
